import React from "react";
import './Header.css';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';




const Header = (props) => {

    let links = null;
    if (true) {
        
        links = (
            <Nav className="mr-md-5">

                <NavItem>
                    <NavLink exact to='/login' className="NavLink">Login</NavLink>
                </NavItem>
            </Nav>
        )
    }
    else {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact to='/homepage' className="NavLink">Homepage</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact to='/logout' className="NavLink">Logout</NavLink>
                </NavItem>

            </Nav>
        )
    }
    return (
        <div>
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px",
            }}>
                {links}

            </Navbar>
        </div>
    );
}

export default Header;
