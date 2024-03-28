import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import TvShows from "./TvShows";
import MovieDetail from "./MovieDetail";
import PopularShows from "./PopularShows";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/tv-shows",
      element: <TvShows />,
    },
    {
      path: "/popular",
      element: <PopularShows />,
    },
    {
      path: "/movie/:movieId",
      element: <MovieDetail />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
