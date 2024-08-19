import "./index.css";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PlansPage from "./pages/PlansPage";
import BrowsePage from "./pages/BrowsePage";
import WatchPage from "./pages/WatchPage";
import App from "./App";
// import PrivateRoutes from "./utils/PrivateRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/plans" element={<PlansPage />} />

      <Route path="/browse" element={<BrowsePage />} />
      <Route path="/browse/watch/:id" element={<WatchPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
