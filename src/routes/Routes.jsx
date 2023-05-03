import React from "react";

import {
  createBrowserRouter
} from "react-router-dom";

import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Blog from "../layout/Blog/Blog";
import ChefRecipe from "../Pages/Home/chefRecipe/chefRecipe";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    {
      path: "/about",
        element: <About></About>,
    },
    {
      path:"/blog",
      element: <Blog></Blog>
    },
    {
      path:"/viewRecipes/:id",
      element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
      loader: () => fetch('http://localhost:5000/chefData/')
    },
    {
      path:"/login",
      element: <Login></Login>,
    },
    {
      path:"/register",
      element: <Register></Register>,
    },
    ]
  },
]);

export default router;