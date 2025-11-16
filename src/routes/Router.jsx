import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home/Home";
import Covarage from "../pages/Coverage/Covarage";

export const Router=createBrowserRouter([
    {
        path:'/',
        Component:MainLayouts,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/covarage',
                Component:Covarage,
                loader:()=>fetch('/warehouses.json').then(res=>res.json())
            },

        ]
    }
])