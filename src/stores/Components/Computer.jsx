import React from 'react';
import { computerData } from '../data/computers';
import './ComputerC.css';
import { Link } from 'react-router-dom';

const Computer = () => {
  return (
    <div className="computer-section">
      <h2 className="computer-title">Computers</h2> {/* Heading on the left side */}
      <div className="computer-container">
        {computerData.slice(0, 6).map((item) => ( // Display only 5 images
        <Link key={item.id} to={`/computers/${item.id}`}>  
          <div key={item.id} className="computer-card">
            <img src={item.image} alt="computer-card" />
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Computer;
