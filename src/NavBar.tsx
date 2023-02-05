import React from 'react';
import { Link } from 'react-router-dom'
import { NavbarInt } from './interfaces/AppInterfaces';
import styled from 'styled-components'
const StyledNav = styled.nav`
background:#73aaad

`
export const Navbar = ({ title }: NavbarInt) => {


    return (

        <StyledNav className="navbar navbar-expand-lg navbar-light">
            <a style={{ color: 'white' }} className="navbar-brand" href="#">{title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">


                    <li className="nav-item">
                        <Link className="nav-link" to='/home'>Home</Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/orders'>Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/cart'>Cart</Link>
                    </li>

                </ul>


            </div>
        </StyledNav>

    )

    // return (
    //     <nav className="navbar  bg-primary">
    //         <h1>
    //             {title}
    //         </h1>
    //         <ul>
    //             <li>
    //                 <Link to='/widgets'>Widgets</Link>
    //             </li>
    //             <li>
    //                 <Link to='/wudgets'>Wudgets</Link>
    //             </li>
    //             <li>
    //                 <Link to='/'>Home</Link>
    //             </li>
    //         </ul>
    //     </nav>
    // )

}