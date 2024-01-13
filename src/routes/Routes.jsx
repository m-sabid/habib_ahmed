import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/LayoutMain";
import App from "../App";
import PrivetRoute from "./PrivetRoute";
import PDFViewer from "../Components/Pages/Documents/PDFViewer";
import Settings from "../Components/Pages/Settings/Settings";
import LoginPage from "../Components/Pages/LoginPage";
import SingUpPage from "../Components/Pages/SingupPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/singup",
        element: <SingUpPage />,
      },
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/resume",
        element: <PDFViewer />,
      },
      {
        path: "/settings",
        element: (
          <PrivetRoute>
            <Settings />
          </PrivetRoute>
        ),
      },
 
      // {
      //   path: "/expense-by-property/edit",
      //   element: (
      //     <PrivetRoute>
      //       <ExpenseBypropertyedit></ExpenseBypropertyedit>
      //     </PrivetRoute>
      //   ),
      // },
    ],
  },
]);
