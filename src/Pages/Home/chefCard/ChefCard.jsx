import React from 'react';

const ChefCard = ({c}) => {
 
    return (
        
           
  <div className="col">
    <div className="card">
      <img className='img-fluid rounded  mx-auto d-block' src={c.chef_img}/>
      <div className="card-body p-4">
        <h4 className="card-title">{c.chef_name}</h4>
        <p className='text-secondary'> Years of experience: {c.experience}</p>
         <p className='text-secondary'>Numbers of recipes: {c.number_of_recipes}</p>
         <p className='text-secondary'>Likes: {c.likes}</p>
         <div className='text-center'>
         <button className='btn btn-info text-white mx-auto'>View Recipe</button>
         </div>
          
      </div>
    </div>
  </div>


    );
};

export default ChefCard;