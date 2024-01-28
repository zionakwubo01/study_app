
import { createBrowserRouter } from "react-router-dom"

import Register from "../pages/Register"
import Verify from "../pages/Verify"
import Login from "../pages/Login"
import AuthLayout from "../Lay/AuthLayout"
import Layout from "../Lay/Layout"
import Homescreen from "../Lay/Homescreen"
import Createstudy from "../pages/Createstudy"


export const mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/verify",
                element: <Verify />
            },


        ]
    },
    {
        path: "/dash",
        element: <Layout />,
        children: [
            {
                path: "add",
                element: <Createstudy />
            }
        ],

    },


])