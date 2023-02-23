import React from "react";

import { useRoutes } from "react-router-dom";
import AdminGuard from "../guards/AdminGuard";
import AuthGuard from "../guards/AuthGuard";
import NoAuthGuard from "../guards/NoAuthGuard";
import { AdminLayout } from "layouts/admin/AdminLayout";
import HomeLayout from "layouts/home/HomeLayout";
import Booking from "pages/booking/Booking";
import HomePage from "pages/home/HomePage";
import Login from "pages/login/Login";
import MovieDetail from "pages/movie-detail/MovieDetail";
import MovieManagement from "pages/movie-management/MovieManagement";
import Register from "pages/register/Register";
import MovieForm from "pages/movie-form/MovieForm";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/movie-detail/:id",
          element: <MovieDetail />,
        },
        {
          path: "/",
          element: <AuthGuard />,
          children: [
            {
              path: "/booking/:id",
              element: <Booking />,
            },
          ],
        },
        {
          path: "/",
          element: <NoAuthGuard />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
          ],
        },
        {
          path: "/",
          element: <NoAuthGuard />,
          children: [
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <AdminGuard />,
          children: [
            {
              path: "/admin/flims",
              element: <MovieManagement />,
            },
            {
              path: "/admin/flims/addnew",
              element: <MovieForm />,
            },
            {
              path: "/admin/flims/edit/:id",
              element: <MovieForm />,
            },
          ],
        },
      ],
    },
  ]);

  return routing;
}
