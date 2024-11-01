import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tree from "./components/Tree";
import Home from "./components/Home";
export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/tree:formal",
      element: <Tree />,
    },
  ]);
  return(<RouterProvider router={router} />
  );
}
