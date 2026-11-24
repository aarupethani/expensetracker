import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AddExpensePage from "./pages/AddExpensePage";
import ExpenseDetails from "./components/ExpenseDetails";

function App(){
const route=createBrowserRouter([
    {path:'/',element:<Homepage/>},
    {path:'/add-expense',element:<AddExpensePage/>},
    {path:'/expenseDetails/:id',element:<ExpenseDetails/>}
])
 return (
  <>
  
  <RouterProvider router={route}/>
  </>
 );
}
export default App