import React, { useState } from 'react';
import { acData } from '../data/ac';
import './MobilePageC.css';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const AcPage = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <Navbar />
            
            {/* Search Section */}
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
                {acData
                    .filter(item =>
                        item.company.toLowerCase().includes(search.toLowerCase()) ||
                        item.model.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                        <div key={item.id} className='pageCard'>
                            <Link to={`/ac/${item.id}`}>
                                <img src={item.image} alt={item.name} className="mobileImage" />
                            </Link>
                            <div className="mobileDetails">
                                <h3 className="mobileCompany">{item.company}</h3>
                                <p className="mobileModel">{item.model}</p>
                            </div>
                        </div>
                    ))
                }
                {acData.filter(item =>
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

export default AcPage;