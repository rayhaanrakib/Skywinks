import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../utils/Layout";
import Error from "../pages/Error";
import About from './../pages/About';
import Contact from './../pages/Contact';
import Search from './../pages/main/Search';
import Destinations from './../pages/main/Destinations';
import TourPlan from './../pages/main/TourPlan';
import Services from './../pages/main/Services';
import HomeBn from './../components/Other/Home/HomeBn';
import HomeIn from './../components/Other/Home/HomeIn';
import HomeZh from './../components/Other/Home/HomeZh';

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
                path: "/destinations",
                element: <Destinations></Destinations>
            },
            {
                path: "/plan",
                element: <TourPlan></TourPlan>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/search",
                element: <Search></Search>
            },
            {
                path: "/en",
                element: <Home></Home>
            },
            {
                path: "/bn",
                element: <HomeBn></HomeBn>
            },
            {
                path: "/in",
                element: <HomeIn></HomeIn>
            },
            {
                path: "/zh",
                element: <HomeZh></HomeZh>
            },
        ]
    },
]);

export default Routes;