import React, { useState } from 'react';
import {FaBookmark} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
const FavouriteButton = ({recipe}) => {
    const [disabledButtons, setDisabledButtons] = useState([]);
    console.log(recipe)
    const notify = (id) => 
    {
        toast("Recipe is added to Favourite");
        setDisabledButtons([...disabledButtons, id]);
    }
    const isButtonDisabled = (id) => {
        return disabledButtons.includes(id);
      }
    return (
        <div className='text-center p-2'>
                
        <button onClick={() => notify(recipe.recipe_id)}
        disabled={isButtonDisabled(recipe.recipe_id)}
 className='btn btn-light'><FaBookmark></FaBookmark>  Add to Favourite</button>
        <ToastContainer />
        </div>
    );
};

export default FavouriteButton;