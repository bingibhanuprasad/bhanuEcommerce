import React from 'react';
import { tvData } from '../data/tv';
import './TvC.css'; // Updated CSS file name
import { Link } from 'react-router-dom';

const Tv = () => {
  return (
    <div className="tv-section">
      <h2 className="tv-title">TVs</h2>  
      <div className="tv-container">
        {tvData.slice(0, 6).map((item) => ( 
          <Link key={item.id} to={`/Tvs/${item.id}`}>  
          <div key={item.id} className="tv-card">
            <img src={item.image} alt="TV" />
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tv;
