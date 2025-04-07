import React, { useState } from 'react';
import { computerData } from '../data/computers';
import './MobilePageC.css';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const ComputerPage = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <Navbar />
   
            <div className="pro-selected">
                <input 
                    type="text" 
                    placeholder="Search by company or model..." 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className="search-bar"
                />
            </div>

            <div className='pageSection'>
                {computerData
                    .filter(item =>
                        item.company.toLowerCase().includes(search.toLowerCase()) ||
                        item.model.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                        <div key={item.id} className='pageCard'>
                            <Link to={`/computers/${item.id}`}>
                                <img src={item.image} alt={item.name} className="mobileImage" />
                            </Link>
                            <div className="mobileDetails">
                                <h3 className="mobileCompany">{item.company}</h3>
                                <p className="mobileModel">{item.model}</p>
                            </div>
                        </div>
                    ))
                }
                {computerData.filter(item =>
                    item.company.toLowerCase().includes(search.toLowerCase()) ||
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

export default ComputerPage;