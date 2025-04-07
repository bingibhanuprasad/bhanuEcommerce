// import React, { useState } from 'react';
// import { mobileData } from '../data/mobiles';
// import './MobilePageC.css';
// import Navbar from '../Components/Navbar';
// import { Link } from 'react-router-dom';

// const MobilePage = () => {
//     const [selectedProducts, setSelectedProducts] = useState([]);

//     const companyHandler = (company) => {
//         if (selectedProducts.includes(company)) {
           
//             setSelectedProducts(selectedProducts.filter(item => item !== company));
//         } else {
       
//             setSelectedProducts([...selectedProducts, company]);
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="pro-selected">
//                 {mobileData
//                     .map((phone, index) => (
//                         <div key={index}>
//                             <label>
//                                 <input 
//                                     type="checkbox"
//                                     value={phone.company}
//                                     checked={selectedProducts.includes(phone.company)}
//                                     onChange={() => companyHandler(phone.company)}
//                                 />
//                                 {phone.company}
//                             </label>
//                         </div>
//                     ))
//                 }
//             </div>

//             <div className='pageSection'>
//                 {mobileData
//                     .filter(item => selectedProducts.length === 0 || selectedProducts.includes(item.company)) // Show selected companies
//                     .map((item) => (
//                         <div key={item.id} className='pageCard'>
//                             <Link to={`/mobiles/${item.id}`}>
//                                 <img src={item.image} alt={item.name} className="mobileImage" />
//                             </Link>
//                             <div className="mobileDetails">
//                                 <h3 className="mobileCompany">{item.company}</h3>
//                                 <p className="mobileModel">{item.model}</p>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </>
//     );
// };

// export default MobilePage;

import React, { useState } from 'react';
import { mobileData } from '../data/mobiles';
import './MobilePageC.css';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const MobilePage = () => {
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
                {mobileData
                    .filter(item =>
                        item.company.toLowerCase().includes(search.toLowerCase()) ||
                        item.model.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                        <div key={item.id} className='pageCard'>
                            <Link to={`/mobiles/${item.id}`}>
                                <img src={item.image} alt={item.name} className="mobileImage" />
                            </Link>
                            <div className="mobileDetails">
                                <h3 className="mobileCompany">{item.company}</h3>
                                <p className="mobileModel">{item.model}</p>
                            </div>
                        </div>
                    ))
                }
                {mobileData.filter(item =>
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

export default MobilePage;