import Layout from "../layout/Layout";
import HomePage from "../../features/homePage/pages/HomePage";
import AnimalsPage from "../../features/animals/pages/AnimalsPage";

const router = [
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <AnimalsPage />,
        path: "animals",
      },
    ],
  },
];

export default router;
