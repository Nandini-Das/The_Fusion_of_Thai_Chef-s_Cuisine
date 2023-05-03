import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../../RecipeCard/RecipeCard';

const ChefRecipe = () => {
    const {id} = useParams();
    const [viewRecipe, setViewRecipe] = useState({});
   
    const recipes = useLoaderData();
    
    useEffect(() => {
        if(recipes){
            let match = recipes.find(recipe => recipe.id == id)
            setViewRecipe(match)
        }
    }, [])
    const recipeAll = viewRecipe.recipes;
   
   
    return (
        <div>
                <div className='d-flex justify-content-around container mt-3'>
            
            <div>
                <h5>{viewRecipe.chef_name}</h5>
                 <p>Bio: {viewRecipe.bio}</p>
                <p>Likes : {viewRecipe.likes}</p> 
                <p> Number of recipes: {viewRecipe.number_of_recipes}</p> 
                <p>Years of experience: {viewRecipe.experience}</p> 
            </div>
            <div className='ms-5 my-auto h-50'>
            <img className='img-fluid h-full' src={viewRecipe.chef_img}/>
            </div>
         
        </div>
        <div >
        <RecipeCard recipeAll= {recipeAll}></RecipeCard>
        </div>
      
        </div>
    
    );
};

export default ChefRecipe;