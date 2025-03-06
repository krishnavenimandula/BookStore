import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/Orders",
        element: <div>Orders</div>,
      },
      {
        path: "/About",
        element: <div>About</div>,
      },
    ],
  },
]);

export default router;
