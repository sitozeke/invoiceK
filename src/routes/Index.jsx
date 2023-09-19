import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";

const router = createHashRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "signin", element: <SignIn /> },
    ],
  },
]);
export default router;
