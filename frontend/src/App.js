import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FeedsPage from "./pages/FeedsPage";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
