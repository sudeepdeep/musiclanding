import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MusicPage from "./components/MusicPage";

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
