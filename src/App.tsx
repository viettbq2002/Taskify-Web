import routes from "@/routes";
import "@mantine/core/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
