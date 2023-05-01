import React, { useEffect, useState } from 'react';
import ChefCard from '../chefCard/ChefCard';

const Home = () => {
    const [chefData, setChefData] = useState([]);
    useEffect(()=>{
     fetch('http://localhost:5000/chefData')
     .then(req => req.json())
     .then(data => setChefData(data))
    }, [])
    return (
        <div className='container'>
            <h3 className='text-center mt-5 p-3'>Let's introduce our CHEFS.....</h3>
            <div className="mt-4 row row-cols-1 row-cols-md-3 g-4">
           
           {
            chefData.map(c=> <ChefCard key={c.id} c = {c}></ChefCard>)
           }
        </div>
        </div>
        
    );
};

export default Home;