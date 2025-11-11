import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import PageError from "../ErrorPage/PageError";
import AllCrops from "../Pages/AllCrops";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <PageError/>,
        children: [
            {
                index: true,
                Component: Home,
                loader: ()=> fetch('http://localhost:5000/latest-crops'),
                hydrateFallbackElement: <LoadingSpinner/>
            },
            {
                path: '/all-crops',
                Component: AllCrops,
                loader: ()=> fetch('http://localhost:5000/crops'),
                hydrateFallbackElement: <LoadingSpinner/>
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            }
        ]
    }
])