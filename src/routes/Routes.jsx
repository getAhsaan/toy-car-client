import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import Blog from "../pages/blog/Blog";
import ErrorPage from "../pages/home/error/ErrorPage";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import AllToys from "../pages/toys/allToys/AllToys";
import SingleToys from "../pages/toys/singleToys/SingleToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/sign-up",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/single-toys",
        element: <SingleToys></SingleToys>,
      },
    ],
  },
]);

export default router;
