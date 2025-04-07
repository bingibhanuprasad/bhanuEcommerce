import React from 'react';
import { watchData } from '../data/watch';
import './WatchC.css';
import { Link } from 'react-router-dom';

const Watch = () => {
  return (
    <div className="watch-section">
      <h2 className="watch-title">Watches</h2>

      <div className="watch-container">
        {watchData.slice(0, 6).map((item) => (
          <Link key={item.id} to={`/watches/${item.id}`}>  
          <div key={item.id} className="watch-card">
            <img src={item.image} alt="watch-card" />
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Watch;
