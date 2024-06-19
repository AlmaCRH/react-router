import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import NotFound from "../pages/NoutFound/NotFound";
import Todos from "../pages/Todos/Todos";
import Todo from "../pages/Todo/Todo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <AboutUs />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/todos/:todoId",
        element: <Todo />,
      },
    ],
  },
]);

export default router;
