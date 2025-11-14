import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import PageError from "../ErrorPage/PageError";
import AllCrops from "../Pages/AllCrops";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ForgetPassword from "../Pages/ForgetPassword";
import AddCrops from "../Pages/AddCrops";
import PrivateRoute from "./PrivateRoute";
import CropDetails from "../Pages/CropDetails";
import MyPosts from "../Pages/MyPosts";
import Profile from "../Pages/Profile";
import MyInterest from "../Pages/MyInterest";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <PageError/>,
        children: [
            {
                index: true,
                Component: Home,
                loader: ()=> fetch('https://fasal-bridge-server.vercel.app/latest-crops'),
                hydrateFallbackElement: <LoadingSpinner/>
            },
            {
                path: '/all-crops',
                Component: AllCrops,
                loader: ()=> fetch('https://fasal-bridge-server.vercel.app/crops'),
                hydrateFallbackElement: <LoadingSpinner/>
            },
            {
                path: '/add-crops',
                element: <PrivateRoute>
                    <AddCrops/>
                </PrivateRoute>
                    
                

            },
            {
                path: '/crop-details/:id',
                element: <PrivateRoute>
                    <CropDetails/>
                </PrivateRoute>
            },
            {
             path: '/my-posts',
             element: <PrivateRoute>
                <MyPosts/>
             </PrivateRoute>
            },
            {
             path: '/profile',
             element: <PrivateRoute>
                <Profile/>
             </PrivateRoute>
            },
             {
             path: '/my-interests',
             element: <PrivateRoute>
                <MyInterest/>
             </PrivateRoute>
            },

            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/forget-password',
                Component: ForgetPassword
            }
        ]
    }
])