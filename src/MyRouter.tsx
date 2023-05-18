import MoviesPage from './pages/MoviesPage';
import Video from './components/Video'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesPage/>,
  },
  {
    path: "category/:catId/video/:videoId",
    element: <Video/>,
  },
]);

  function MyRouter() {
    return(
      <RouterProvider router={router} />
    )
  }

  export default MyRouter;