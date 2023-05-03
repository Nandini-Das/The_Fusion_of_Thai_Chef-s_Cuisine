import React from 'react';
import {FaBookmark} from "react-icons/fa";
import { FcLike } from "react-icons/fc";
const RecipeCard = ({recipeAll}) => {
   console.log(recipeAll)
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            
         {
           recipeAll?
           recipeAll.map(recipe =>
            <div class="col">
            <div class="card">
              <img src={recipe.recipe_img} alt="" srcset="" />
              <div class="card-body">
                <h5 class="card-title">{recipe.recipe_name}</h5>
                <p class="card-text">Ingredients: {recipe.ingredients}</p>
                <p>Cooking method : {recipe.cooking_method} </p>
                <p> <FcLike></FcLike> Ratings: {recipe.rating}</p>
                <div className='text-center p-2'>
                
                <p className='btn btn-light'><FaBookmark></FaBookmark>  Add to Favourite</p>

                </div>
                
                <p></p>
              </div>
            </div>
          </div>) : 'No data found'
         }
      </div>
    );
};

export default RecipeCard;