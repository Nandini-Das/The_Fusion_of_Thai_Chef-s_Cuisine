import React from 'react';
import bann from '../../../../public/bann.jpg'
import NavbarChef from '../../Shared/Navbar/Navbarchef';
const Header = () => {
    return (
        <div>
         <NavbarChef></NavbarChef>
          <div className='d-lg-flex'>
          <div className='me-3'>
                <img src={bann}/>
            </div>
            <div className='mx-auto my-auto'>
                <h1 className='lh-base text-success fs-1 text'> The Fusion 
                <br />
                <span className='ms-4 p-5'> of </span>
                <br /> <span className='p-5 ms-5'>Thai Chef's Cuisine</span> </h1>
                <p className='text-secondary fst-italic mt-5 my-auto lh-lg'>You Know It’s Good When It’s Thai FoodYou Gotta Thai And Try the Perfect Balance Of Flavors
                    <br />
                 Run For The Thai Bite! It’s Not Gluttony If It’s Thai Food 
                        Never Miss A Thai Food Feast ;
                        <br /> Flirt With The Spice Just Like In Thailand
                   Explore A World Of Flavors
</p>
            </div>
            
          </div>
          
        </div>
    );
};

export default Header;