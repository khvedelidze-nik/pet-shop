import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./shared/utils/routes";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)} />
    </>
  );
}

export default App;
