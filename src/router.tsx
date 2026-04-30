  import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import TitlePage from "./pages/TitlePage";
import Introduction from "./pages/Introduction";
import CompanyProfile from "./pages/CompanyProfile";
import WorkExperiences from "./pages/WorkExperiences";
import Assessment from "./pages/Assessment";
import Appendices from "./pages/Appendices";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <TitlePage /> },
      { path: "introduction", element: <Introduction /> },
      { path: "company-profile", element: <CompanyProfile /> },
      { path: "work-experiences", element: <WorkExperiences /> },
      { path: "assessment", element: <Assessment /> },
      { path: "appendices", element: <Appendices /> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/404" replace /> },
    ],
  },
]);

export default router;
