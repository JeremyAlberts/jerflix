import MovieRow from './components/MovieRow'
import Video from './components/Video'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieRow/>,
  },
  {
    path: "video/:id",
    element: <Video/>,
  },
]);

  function MyRouter() {
    return(
      <RouterProvider router={router} />
    )
  }

  export default MyRouter;