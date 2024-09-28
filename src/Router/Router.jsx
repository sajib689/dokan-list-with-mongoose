import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import ShopOwnerForm from './../Components/OwnerShopForm';
import Registration from "../Authentication/Registration";
import Login from "../Authentication/Login";
import DokanList from "../Components/DokanList";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
        path: "/",
        element: <Home/>
        },
        {
        path: "/addshop",
        element: <ShopOwnerForm/>
        },
        {
        path: "/registration",
        element: <Registration/>
        },
        {
        path: "/login",
        element: <Login/>
        },
        {
        path: "/shops",
        element: <DokanList/>
        },
      ]
    },
  ]);

  export default router;