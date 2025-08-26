import Layout from "../layout/Layout";
import HomePage from "../../features/homePage/pages/HomePage";
import CreateAnimalPage from "../../features/createPage/pages/CreateAnimalPage";
import CreateCategoryPage from "../../features/createPage/pages/CreateCategoryPage";
import ListAnimalsPage from "../../features/listPage/pages/ListAnimalsPage";
import ListCategoriesPage from "../../features/listPage/pages/ListCategoriesPage";
import EditAnimalPage from "../../features/editPage/pages/EditAnimalPage";
import EditCategoryPage from "../../features/editPage/pages/EditCategoryPage";

const router = [
  {
    element: <Layout />,
    errorElement: <Layout />,
    path: "/",
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <ListAnimalsPage />,
        path: "list/animals",
      },
      {
        element: <ListCategoriesPage />,
        path: "list/categories",
      },
      {
        element: <CreateAnimalPage />,
        path: "create/animal",
      },
      {
        element: <CreateCategoryPage />,
        path: "create/category",
      },
      {
        element: <EditAnimalPage />,
        path: "edit/animal/:id",
      },
      {
        element: <EditCategoryPage />,
        path: "edit/category/:id",
      },
    ],
  },
];

export default router;
