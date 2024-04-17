import "./App.css";
import UserLogin from "./Components/UserLogin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import ListContainer from "./Components/ListContainer";
import store from "./Util/store";
import { Provider } from "react-redux";
import { lazy, Suspense } from "react";

const MovieDetails = lazy(() => import("./Components/MovieDetails"));

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <UserLogin />,
      children: [
        {
          path: "/Home",
          element: <MainContainer />,
        },
        {
          path: "/List",
          element: <ListContainer />,
        },
        {
          path: "/MovieDetails",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <MovieDetails />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
