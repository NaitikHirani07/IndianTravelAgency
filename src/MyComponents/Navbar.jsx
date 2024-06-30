import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from './../asset/Logo.png';
import './Navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand logo" to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark" to="/category">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark" to="/topselling">Destinations</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark" to="/easyandfast">Bookings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark" to="#">Hotels</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
