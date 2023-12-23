import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/LayoutMain";
import App from "../App";
import PrivetRoute from "./PrivetRoute";
import PDFViewer from "../Components/Pages/Documents/PDFViewer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          // <PrivetRoute>
            <App />
          // </PrivetRoute>
        ),
      },
      {
        path: "/resume",
        element: <PDFViewer />,
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
