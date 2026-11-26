import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AddExpensePage from "./pages/AddExpensePage";
import ExpenseDetails from "./components/ExpenseDetails";
import Layout from "./Layout/Layout";
import LoginPage from "./Pages/LoginPage";
import PrivateRoutes from "./auth/PrivateRoutes";
import ExpenseItemPage from "./Pages/ExpenseItemPage";

function App() {
    const route = createBrowserRouter([
        {
            path: "/", element: (<PrivateRoutes> <Layout /> </PrivateRoutes>), children: [{ path: '/', element: <Homepage /> },
            { path: '/add-expense', element: <AddExpensePage /> },
            { path: '/expense-items', element: <ExpenseItemPage /> },
            { path: '/expenseDetails/:id', element: <ExpenseDetails /> },
            ],
        },
        { path: "/login", element: <LoginPage /> },
    ]);
    return (
        <>

            <RouterProvider router={route} />
        </>
    );
}
export default App