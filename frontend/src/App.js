import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FeedsPage from "./pages/FeedsPage";
import Root from "./pages/Root";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PostPage from "./pages/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/share",
        element: <PostPage />
      },
      {
        path: "/",
        element: <FeedsPage />,
      },
      {
        path: "/:page",
        element: <FeedsPage />,
      }
    ],
    // errorElement: <Root />,
  },
  {
    path: "/signin",
    element: <SignInPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  }
]);

function App() {
  return (
    // <div className="">
    //   <p>Hello world</p>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
