import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import Blog from "../pages/blog/Blog";
import ErrorPage from "../pages/home/error/ErrorPage";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import AllToys from "../pages/toys/allToys/AllToys";
import SingleToy from "../pages/toys/singleToy/SingleToy";
import ToyForm from "../pages/toyForm/ToyForm";
import MyToys from "../pages/toys/myToys/MyToys";
import UpdateForm from "../pages/toyForm/UpdateForm";

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
        loader: () => fetch("http://localhost:5000/cars"),
      },
      {
        path: "/single-toy/:id",
        element: <SingleToy></SingleToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: "/toy-form",
        element: <ToyForm></ToyForm>,
      },
      {
        path: "/update-form/:id",
        element: <UpdateForm></UpdateForm>,
        loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
    ],
  },
]);

export default router;
