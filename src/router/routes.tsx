import {
  BrowserRouter as RouterProvider,
  Route,
  Routes as Router,
} from "react-router-dom";
import { Home } from "../pages/home/home.tsx";
import { NotFound } from "../not-found.tsx";

export function Routes() {
  return (
    <RouterProvider>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Router>
    </RouterProvider>
  );
}
