
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import AddExpensePage from "./Pages/AddExpensepage";

function App(){
    const route=createBrowserRouter([

        {path:'/',element:<Homepage/>},{path:'add-expense',element:<AddExpensePage/>}
    ])
    
return(
    <>
    <RouterProvider router={route}/>
    
    </>
);
}
export default App;
