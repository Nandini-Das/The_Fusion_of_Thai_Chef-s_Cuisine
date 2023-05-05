import React, { useState } from 'react';

import { FcLike } from "react-icons/fc";

import 'react-toastify/dist/ReactToastify.css';
import FavouriteButton from '../FavouriteButton';
const RecipeCard = ({recipeAll}) => {

 
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            
         {
           recipeAll?
           recipeAll.map(recipe =>
            <div className="col card-deck h-100">
            <div className="card">
              <img className='h-full' src={recipe.recipe_img} alt="" srcset="" />
              <div className="card-body">
                <h3 className="card-title">{recipe.recipe_name}</h3>
                <p className="card-text"> <span className='text-decoration-underline'> Ingredients : </span> {recipe.ingredients}</p>
                <p className='card-text'> <span className='text-decoration-underline'> Cooking method :</span> {recipe.cooking_method} </p>
                <p className=''> <FcLike></FcLike> Ratings: {recipe.rating}</p>
              
                <FavouriteButton recipe ={recipe}></FavouriteButton>
                <p></p>
              </div>
            </div>
          </div>) : 'No data found'
         }
      </div>
    );
};

export default RecipeCard;