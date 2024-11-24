import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tree from "./components/Tree";
import Home from "./components/Home";
import Charts from "./components/Charts";
import OccuCharts from "./components/OccuCharts";
export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/tree/:id",
      element: <Tree />,
    },
    {
      path: "/charts",
      element: <Charts />,
    children: [
      {
        path: "occu-charts",
        element: <OccuCharts />,}
    ]}
  ]);
  return(<RouterProvider router={router} />
  );
}
