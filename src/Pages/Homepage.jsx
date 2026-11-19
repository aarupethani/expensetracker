import ExpenseList from "../components/ExpenseList";
import Navbar from "../components/Navbar";

export default function Homepage(){
    const expense=[
    {
    amount :"₹5,000" ,
    shopping :"dairy",
    date:"18 nov 2024",
    category:"milk"
    },
    {
    amount :"₹200" ,
    shopping :"vegetable",
    date:"28 nov 2024",
    category:"food"
    },
    {
    amount :"₹5,700" ,
    shopping :"sports",
    date:"18 nov 2024",
    category:"games"
    },
    {
    amount :"₹20,000" ,
    shopping :"beauty",
    date:"18 nov 2024",
    category:"product"
    },
];



    return(
     <>
    <Navbar/>
    <ExpenseList expense={expense}/>
     </>   
    );
}