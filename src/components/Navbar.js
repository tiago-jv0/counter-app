import React from 'react';

export const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>
    );
};
