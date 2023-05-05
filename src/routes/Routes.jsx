import React from "react";

import {
  createBrowserRouter
} from "react-router-dom";

import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";

import ChefRecipe from "../Pages/Home/chefRecipe/chefRecipe";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      loader: ({params}) => fetch(`https://assignment-10-the-fusion-of-thai-chef-s-cuisine-ser-nandini-das.vercel.app/chefData/`)
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