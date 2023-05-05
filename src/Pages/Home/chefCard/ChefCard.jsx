import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({c}) => {
   
    return (
        
           
  <div className="col card-deck h-full">
    <div className="card">
    <LazyLoad>
    <img height={25} className='img-fluid rounded  mx-auto d-block h-full' src={c.chef_img}/>
    </LazyLoad>
      
      <div className="card-body p-4">
        <h4 className="card-title">{c.chef_name}</h4>
        <p className='text-secondary'> Years of experience: {c.experience}</p>
         <p className='text-secondary'>Numbers of recipes: {c.number_of_recipes}</p>
         <p className='text-secondary'>Likes: {c.likes}</p>
         <div className='text-center'>
         <button className='btn btn-info  mx-auto'><Link className='text-decoration-none p-2 text-white' to={`/viewRecipes/${c.id}`} > View Recipes</Link></button>
         </div>
          
      </div>
    </div>
  </div>


    );
};

export default ChefCard;