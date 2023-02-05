import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const CartModal = ({ show, handleClose, item, handleSave }) => {
    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className='table table-hover'>
                <tbody>
                    <tr>
                        <td>Retailer</td><td>{item.retailer}</td>
                    </tr>
                    <tr>
                        <td>Description</td><td>{item.description}</td>
                    </tr>

                    <tr>
                        <td>Cost</td><td>{item.cost}</td>
                    </tr>
                </tbody>
            </table>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
}

