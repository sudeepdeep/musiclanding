import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MusicPage from "./components/MusicPage";
import AlbumPage from "./components/AlbumPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "music/:slug",
      element: <MusicPage />,
    },

    {
      path: "album/:slug",
      element: <AlbumPage />,
    },
    {
      path: "privacy-policy",
      element: <PrivacyPolicy />,
    },
  ]);

  return (
    <div className="font-orbitron">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
