import React, { useEffect, useState } from 'react';
import ChefCard from '../chefCard/ChefCard';
import bann from '../../../../public/bann.jpg'
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
const Home = () => {
    const [chefData, setChefData] = useState([]);
    useEffect(()=>{
     fetch('http://localhost:5000/chefData')
     .then(req => req.json())
     .then(data => setChefData(data))
    }, [])
    return (
        <div className='container'>
    <Carousel>
      <Carousel.Item>
      
         <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1516001784377-938d72d1e4ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />


        <Carousel.Caption>
        <h1 >Flirt With The Spice Just Like In Thailand</h1>
                <p className='fst-italic'>You Know It’s Good When It’s Thai Food. 
                    <br />
                 
                        <br /> 
</p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1663126539309-ca827558ea6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
         
        />


        <Carousel.Caption>
          <h3>
                   Explore A World Of Flavors</h3>
          <p className='fst-italic'>You Gotta Thai And Try the Perfect Balance Of Flavors</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1663090925863-248813831d5d?ixlib=rb-4.0.3&ixid=MnwxMjAl3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> Never Miss A Thai Food Feast ;</h3>
          <p className='fst-italic'>
          Run For The Thai Bite! It’s Not Gluttony If It’s Thai Food 
                       
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Services></Services>
            <h3 className='text-center mt-5 p-3'>Let's introduce our CHEFS.....</h3>
            <div className="mt-4 row row-cols-1 row-cols-md-3 g-4">
           
           {
            chefData.map(c=> <ChefCard key={c.id} c = {c}></ChefCard>)
           }
        </div>
        
        <Testimonials></Testimonials>
        </div>
        
    );
};

export default Home;