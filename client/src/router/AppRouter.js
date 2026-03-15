import { Routes, Route, BrowserRouter } from "react-router-dom";
import RouteNames from "./RouteNames";
import Layout from "../components/Layout";

const AppRouter = ({ visits }) => {
    return (
        <BrowserRouter>
            <Layout visits={visits}>
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