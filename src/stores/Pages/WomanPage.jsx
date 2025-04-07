import React, { useState } from 'react';
import { womanData } from '../data/woman';
import './MobilePageC.css';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const WomanPage = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <Navbar />
            
           
            <div className="pro-selected">
                <input 
                    type="text" 
                    placeholder="Search by brand or model..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="search-bar"
                />
            </div>

            <div className='pageSection'>
                {womanData
                    .filter(item =>
                        item.brand.toLowerCase().includes(search.toLowerCase()) ||
                        item.model.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                        <div key={item.id} className='pageCard'>
                            <Link to={`/women/${item.id}`}>
                                <img src={item.image} alt={item.name} className="mobileImage" />
                            </Link>
                            <div className="mobileDetails">
                                <h3 className="mobileCompany">{item.brand}</h3>
                                <p className="mobileModel">{item.model}</p>
                            </div>
                        </div>
                    ))
                }
                {womanData.filter(item =>
                    item.brand.toLowerCase().includes(search.toLowerCase()) ||
                    item.model.toLowerCase().includes(search.toLowerCase())
                ).length === 0 && (
                    <div className="no-results">
                        <p>No results found for "{search}"</p>
                    </div>
                )}
            </div>
            <Footer/>
        </>
    );
};

export default WomanPage;