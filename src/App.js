import "./App.css";
import UserLogin from "./Components/UserLogin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer  from "./Components/MainContainer";
import ListContainer from "./Components/ListContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <UserLogin />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/List",
          element: <ListContainer />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
