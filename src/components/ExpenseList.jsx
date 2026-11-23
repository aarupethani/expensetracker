import { useEffect, useState } from "react";
import "../style/ExpenseList.css";
import ConfirmationModel from "./ConfirmationModel";
import EditModel from "./EditModel";

function ExpenseList() {
    const [expenses, setExpenses] = useState([]);
    const [deleteExpense, setDeleteExpenses] = useState(null);
    const [openModel, setOpenModel]=useState(false);
    const [editId,setEditId]=useState(null);

    const loadExpenses = () => {
        const savedExpenses = JSON.parse(localStorage.getItem("expences") || "[]");
        setExpenses(savedExpenses);
    };

    useEffect(() => {
        //safe: we only read localstorage amount
        //eslint-disable-next-line react-hooks/set-state-in-effect
        loadExpenses();
    }, []);
    const totalAmount = expenses.reduce(
        (sum, item) => sum + Number(item.amount),
        0,
    );
    const handleDelete=(id)=>{
        const updateExpense=expenses.filter(
            (item)=>item.id !==id
        );

        localStorage.setItem(
            "expense",
            JSON.stringify(updateExpense)
        );
        
        setExpenses(updateExpense);
        setDeleteExpenses(null);
    }
    const editHandler =(id)=>{
        setEditId(id);
        setOpenModel(true);
    };

    return (
        <>
            <div className="ExpenseList">
                <div className="list-search">
                    <div>
                        <h1>your expenses</h1>
                        <p className="list-help">search,edit,or remove an expense below.</p>
                    </div>

                    <div>
                        <select>
                            <option>All categories</option>
                            <option>Food</option>
                            <option>Travel</option>
                            <option>Shopping</option>
                            <option>Entertainment</option>
                        </select>

                        <input type="search" placeholder="search expense..." />
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {expenses.length > 0 ? (
                            expenses.map((expenses) => (
                                <tr key={expenses.id}>
                                    <td>{expenses.amount}</td>
                                    <td>{expenses.description}</td>
                                    <td>{expenses.date}</td>
                                    <td>{expenses.category}</td>
                                    <td className="table-actions">
                                        <button className="btn-delete" onClick={()=>setDeleteExpenses(expenses)}>Delete</button>
                                        <button className="btn-edit" onClick={() => editHandler(expenses.id)}>Edit</button>
                                        <button className="btn-readmore">View</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <>
                                <tr>
                                    <td colSpan="7" className="no-data">
                                        {" "}
                                        No Expenses Found{" "}
                                    </td>
                                </tr>
                            </>
                        )}

                        <tr className="expense-total">
                            <td colSpan="7">total Amount: {totalAmount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {deleteExpense !== null &&(
            <ConfirmationModel
                title="Delete Expense"
                message="Are you sure you want to delete this expense?"
                confirmText="Delete"
                cancelText="Cancel"
                oncancel={() => setDeleteExpenses(null) }
                onConfirm={() => handleDelete(deleteExpense.id) }
            />
            )}
            {openModel && editId !== null &&(
                <EditModel/>

            )}
            
        </>
    );
}

export default ExpenseList;
