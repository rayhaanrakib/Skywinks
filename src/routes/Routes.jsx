import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../utils/Layout";
import Error from "../pages/Error";
import About from './../pages/About';
import Contact from './../pages/Contact';
import Search from './../pages/main/Search';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/search",
                element: <Search></Search>
            },
        ]
    },
]);

export default Routes;