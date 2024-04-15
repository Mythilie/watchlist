import "./App.css";
import UserLogin from "./Components/UserLogin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import ListContainer from "./Components/ListContainer";
import { Provider } from "react-redux";
import store from "./Util/store";

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
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
