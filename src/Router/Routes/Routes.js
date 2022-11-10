import { createBrowserRouter } from "react-router-dom";
import Dashbord from "../../Layout/Dashbord";
import Main from "../../Layout/Main";
import AddReview from "../../pages/AddReview/AddReview";
import DashBord from "../../pages/DashBord/DashBord";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";
import NotFound from "../../pages/NotFound/NotFound";
import AllService from "../../pages/Service/AllService";
import ServiceBooking from "../../pages/Service/ServiceBooking";
import PriveteRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            
            {
                path: '/services',
                loader:(()=>fetch('http://localhost:5000https://drive-your-dreams-server.vercel.app/services')),
                element: <PriveteRoute><AllService /></PriveteRoute>
            },
            {
                path: '/service/:id',
                element: <PriveteRoute><ServiceBooking /></PriveteRoute>
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]

       
    } ,
    {
        path: '/dashbord',
        element: <Dashbord />,
        children:[
            
        {
            path: '/dashbord/addreview',
            element: <AddReview />
        },
        ]
    },
])