import React, { useState } from 'react';
import searchIcon from '../../assets/icons/search-32.png'; 
import './style.css';

const Navbar = props => {

    const [search, setSearch] = useState(false);

    const submiteSearch = e => {
        e.preventDefault();
        alert('Searched');
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Posts</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="search">
                <form onSubmit={submiteSearch}>
                    <input className={searchClass} type='text' placeholder="Search" />
                    <img onClick={openSearch} className="searchIcon" src={searchIcon} alt='Search' />
                </form>
            </div>
        </div>
    );
};

export default Navbar;