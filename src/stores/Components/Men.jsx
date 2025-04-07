import React from 'react';
 
import {menData} from '../data/men';

import './MobilesC.css';  
import { Link } from 'react-router-dom';

const Men = () => {
  return (
    <div className="mobile-section">
      <h2 className="mobile-title">Mobiles</h2>  
      <div className="mobiles-container">
        {menData.slice(0, 6).map((item) => (  
          <Link key={item.id} to={`/Men/${item.id}`}>  
            <div className="mobile-card">
              <img src={item.image} alt="Mobile" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Men;
