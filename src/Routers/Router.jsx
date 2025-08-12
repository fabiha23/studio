import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../Pages/Home";
import ProjectDets from "../Pages/ProjectDets";
import Error from "../Component/Error";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Mainlayout,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path:'/project/:id',
                Component: ProjectDets
            }
        ]
    },
    {
        path: '/*',
        Component: Error
    }
])