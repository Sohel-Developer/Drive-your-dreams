import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";
import NotFound from "../../pages/NotFound/NotFound";
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
                element: <PriveteRoute><ServiceBooking /></PriveteRoute>
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
    }
])