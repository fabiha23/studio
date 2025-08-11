import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Mainlayout,
        children:[
            {
                index:true,
                Component: Home
            }
        ]
    }
])