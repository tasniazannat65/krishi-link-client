import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import PageError from "../ErrorPage/PageError";
import AllCrops from "../Pages/AllCrops";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <PageError/>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/all-crops',
                Component: AllCrops,
                loader: ()=> fetch('http://localhost:5000/crops')
            }
        ]
    }
])