import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Layout from "./components/layout_overall/Layout";
import AdminMain from "./pages/admin/adminMain/AdminMain";
import Journal from "./pages/journal/Journal";
import ExactProtocolPage from "./pages/exactProtocolPage/ExactProtocolPage";
import ExactJournalOther from "./pages/exactJournal/exactJournalOther/ExactJournalOther";
import ExactJournalUpdate from "./pages/exactJournal/exactJournalUpdate/ExactJournalUpdate";
import Documents from "./pages/documents/Documents";
import MainDocument from "./pages/documentData/mainDocument/MainDocument";
import SyphilisData from "./pages/documentData/syphilisDocument/SyphilisData";
import ScreeningData from "./pages/documentData/screeningDocument/ScreeningData";
import AnamnesisDocument from "./pages/documentData/anamnesisDocument/AnamnesisDocument";
import PhysicalExaminationData from "./pages/documentData/physicalExamination/PhysicalExaminationData";
import VisitsData from "./pages/documentData/visitsDocument/VisitsData";
import CriteriaDocument from "./pages/documentData/criteriaDocument/CriteriaDocument";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/main/filter=0",
          element: <Main />,
        },
        {
          path: "/main/filter=1",
          element: <Main />,
        },
        {
          path: "/main/filter=2",
          element: <Main />,
        },
        {
          path: "/main/filter=3",
          element: <Main />,
        },
        {
          path: "/admin/panel",
          element: <AdminMain />,
        },
        {
          path: "/journal",
          element: <Journal />,
        },
        {
          path: "/journal/update/:id",
          element: <ExactJournalUpdate />,
        },
        {
          path: "/journal/:id",
          element: <ExactJournalOther />,
        },
        {
          path: "/protocol/:protocolId/:subjectId",
          element: <ExactProtocolPage />,
        },
        {
          path: "/documents/:id",
          element: <Documents />,
        },

        //для создания
        {
          path: "/document/data/:id",
          element: <MainDocument />,
        },
        {
          path: "/document/data/:protocolId/:id/syphilis",
          element: <SyphilisData />,
        },
        {
          path: "/document/data/:protocolId/:id/screening",
          element: <ScreeningData />,
        },
        {
          path: "/document/data/:protocolId/:id/anamnesis",
          element: <AnamnesisDocument />,
        },
        {
          path: "/document/data/:protocolId/:id/criteria",
          element: <CriteriaDocument />,
        },
        {
          path: "/document/data/:protocolId/:id/physical",
          element: <PhysicalExaminationData />,
        },
        {
          path: "/document/data/:protocolId/:id/visit/:dayId",
          element: <VisitsData />,
        },
        //для редактирования
        {
          path: "/document/data/edit/:protocolId/:id",
          element: <MainDocument />,
        },
        {
          path: "/document/data/edit/:protocolId/:id/syphilis",
          element: <SyphilisData />,
        },
        {
          path: "/document/data/edit/:protocolId/:id/screening",
          element: <ScreeningData />,
        },
        {
          path: "/document/data/edit/:protocolId/:id/anamnesis",
          element: <AnamnesisDocument />,
        },
        {
          path: "/document/data/edit/:protocolId/:id/criteria",
          element: <CriteriaDocument />,
        },
        {
          path: "/document/data/edit/:protocolId/:id/physical",
          element: <PhysicalExaminationData />,
        },
        {
          path: "/document/data/edit/:protocolId/:id/visit/:dayId",
          element: <VisitsData />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
