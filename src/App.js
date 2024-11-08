import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tree from "./components/Tree";
import Home from "./components/Home";
import Charts from "./components/Charts";
export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/tree/:id",
      element: <Tree />,
    },
    {
      path: "/charts",
      element: <Charts />,}
  ]);
  return(<RouterProvider router={router} />
  );
}
