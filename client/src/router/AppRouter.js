import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RouteNames from "./RouteNames";
import Layout from "../components/Layout";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {RouteNames.map((route, index) => {
                        return <Route key={index} path={route.name} element={route.component} />;
                    })}
                    
                </Routes>
            </Layout>
        </BrowserRouter>   
         
    );
};
export default AppRouter; 