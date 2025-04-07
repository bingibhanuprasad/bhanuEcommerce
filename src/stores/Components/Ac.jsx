import React from 'react';
 
import { acData } from '../data/ac';
import './MobilesC.css';  
import { Link } from 'react-router-dom';

const Ac = () => {
  return (
    <div className="mobile-section">
      <h2 className="mobile-title">Mobiles</h2>  
      <div className="mobiles-container">
        {acData.slice(0, 6).map((item) => (  
          <Link key={item.id} to={`/Ac/${item.id}`}>  
            <div className="mobile-card">
              <img src={item.image} alt="Mobile" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ac;
