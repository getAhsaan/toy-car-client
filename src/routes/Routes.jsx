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
import PrivateRoute from "./private/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: "/toy-form",
        element: (
          <PrivateRoute>
            <ToyForm></ToyForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-form/:id",
        element: (
          <PrivateRoute>
            <UpdateForm></UpdateForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
