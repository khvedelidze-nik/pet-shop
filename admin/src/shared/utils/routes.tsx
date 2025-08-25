import Layout from "../layout/Layout";
import HomePage from "../../features/homePage/pages/HomePage";
import ListPage from "../../features/listPage/pages/ListPage";

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
        element: <ListPage />,
        path: "list/:listType",
      },
    ],
  },
];

export default router;
