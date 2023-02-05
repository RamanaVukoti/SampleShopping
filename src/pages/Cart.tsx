import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

import styled from "styled-components"
import { ItemToAddInt } from "../interfaces/AppInterfaces"
import { CartModal } from "./CartModal"
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    isActive: boolean
}
const StyledCart = styled.div`
max-height: 300px;
    overflow: auto;
    
    `
const StyeledSatus = styled.span<Props>`
margin: 10px;
    background: ${(props: any) => props.isActive ? '#7bd97b' : '#d3b6b6'};
    border-radius: 10px;
    padding: 1px 5px 1px 5px;
}
`
export const Cart = () => {


    const [itemsToAdd, setItemsToAdd] = useState<Array<ItemToAddInt>>([])
    const [itemsAddedTocart, setItemsAddedTocart] = useState<Array<ItemToAddInt>>([])
    const [showItem, setShowItem] = useState<boolean>(false)
    const [modalItem, setModalItem] = useState<ItemToAddInt>()

    const toggleShowItem = () => {
        setShowItem(!showItem)

    }

    const loadItemsToAdd = () => {
        const items = []

        Array.from({ length: 10 }).map((obj, index) => {
            console.log({ obj, index })
            const randomNum = Math.random()
            items.push({
                name: `item ${index}`,
                id: randomNum,
                isActive: index % 3 === 0,
                cost: 100,
                retailer: `Retailer ${Math.ceil(randomNum)}`,
                expectedDelieviryDate: new Date(),
                description: 'some random text'
            })
        })

        setItemsToAdd(items)
    }

    useEffect(() => {
        loadItemsToAdd()
    }, [])

    const viewItem = (item: ItemToAddInt) => {
        toggleShowItem()
        setModalItem(item)
    }

    const addItemToCart = (item: ItemToAddInt) => {

        setItemsToAdd(itemsToAdd.filter(obj => obj.id != item.id))
        toast('Item added to cart')
        setItemsAddedTocart(items => {
            return [...items, item]
        })
    }

    const removeItemFromCart = (item: ItemToAddInt) => {
        setItemsAddedTocart(itemsAddedTocart.filter(obj => obj.id != item.id))
        setItemsToAdd(items => {
            return [...items, item]
        })
    }
    const handleClose = () => {
        toggleShowItem()
    }
    const handleSave = () => {
        toggleShowItem()
        addItemToCart(modalItem)
    }
    return <>

        <div className="row">

            <div className="card" style={{ marginTop: '50px' }}>

                <div className="card-body">
                    <div className=" inventory">Inventory</div>


                    <StyledCart className="col-md-12">
                        <table className="table table-striped table-inverse table-responsive">
                            <thead>
                                <tr>
                                    <th>S no</th>
                                    <th>Item Name</th>
                                    <th>Status</th>
                                    <th>Actio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    itemsToAdd.map((item, index) => {
                                        return <tr key={index}>
                                            <td scope="row">{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td><StyeledSatus isActive={item.isActive}>{item.isActive ? 'available' : 'not available'}</StyeledSatus></td>
                                            <td>
                                                <button type="button" disabled={!item.isActive} className="btn btn-primary" onClick={() => viewItem(item)}>Add</button>
                                            </td>
                                        </tr>
                                    })
                                }


                            </tbody>
                        </table>
                    </StyledCart>
                </div>
            </div>

            Total CartItem {itemsAddedTocart && itemsAddedTocart.length}
            <h2>Cart Items</h2>

            {itemsAddedTocart.length ? <StyledCart className="col-md-12">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>S no</th>
                            <th>Item Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemsAddedTocart.map((item, index) => {
                                return <tr key={index}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{item.name}</td>

                                    <td>
                                        <button type="button" disabled={!item.isActive} className="btn btn-danger" onClick={() => removeItemFromCart(item)}>remove</button>
                                    </td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </StyledCart> : <label>No Items present</label>}

            <Toaster position="top-left" />
        </div>

        {modalItem && <CartModal show={showItem} handleClose={handleClose} item={modalItem} handleSave={handleSave} />}
    </>
}