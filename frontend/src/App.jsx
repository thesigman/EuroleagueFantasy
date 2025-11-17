import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import MyTeamPage from "./pages/MyTeamPage";
import LeaguePage from "./pages/LeaguePage";
import PlayersPage from "./pages/PlayersPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "league", element: <LeaguePage /> },
      { path: "team", element: <MyTeamPage /> },
      { path: "players", element: <PlayersPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
