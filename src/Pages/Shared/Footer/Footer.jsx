import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosCall } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaAdn } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=' mt-4 bg-light'>
             <div className='d-md-flex justify-content-around p-5'>
            <div>
                <h3>Find us on</h3>
                <ListGroup>
           <ListGroup.Item ><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
           <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
           <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
      
    </ListGroup>
            </div>
            <div>
                <h3>Contact us</h3>
                <p><IoIosCall></IoIosCall> O91 000 000</p>
                 <p><IoIosCall></IoIosCall> 091 111 111</p>
            </div>
            <div>
                <h3>Help</h3>
                <p> <FiHelpCircle></FiHelpCircle> <Link className='text-decoration-none text-dark pb-5'>Help Center</Link></p>
                <p><FaAdn></FaAdn> <Link className='text-decoration-none text-dark pt-5'>Author</Link></p>
                
            </div>
            <div>
                <h3>Our Community</h3>
                <p>Community</p>
                 <p>Forums</p>
                 <p>Meet ups</p>
                 <p>Privacy Policy</p>
            </div>
        </div>
        <div className='p-2 text-center'>
        <small className='text-secondary'>© 2023 The Fusion of Thai Cuisine. Trademarks and brands are the property of their respective owners.</small>
        </div>
      
        </div>
       
    );
};

export default Footer;