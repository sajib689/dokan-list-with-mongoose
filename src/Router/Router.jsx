import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import ShopOwnerForm from './../Components/OwnerShopForm';

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
      ]
    },
  ]);

  export default router;