import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Layout from "~/components/Layout/Layout";
import { DetailNews } from "~/pages/DetailNews/DetailNews";
import MainPage from "~/pages/MainPage/MainPage";
import Wrong from "~/router/Wrong";
import { paths } from "~/router/paths";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: paths.home,
        element: <MainPage />,
      },
      {
        path: paths.test,
        element: <DetailNews />,
      },
      {
        path: paths.notFound,
        element: <Wrong />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/404s" />,
  },
]);

export default router;
