import '../style/ExpenseList.css';

function ExpenseList({expense}){
    return(
       <div className="ExpenseList">
        <div className="list-search">
            <div>
                <h1>your Expense</h1>
                <p className="list-help">
                    search,edit,or remove an expense below.
                </p>
            </div>
            <div>
                <select>
                    <option>All Categories</option>
                    <option>Food</option>
                     <option>Travel</option>
                      <option>Shopping</option>
                       <option>Entertainment</option>
                </select>
                <input type="search" placeholder="search expense......." />
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
                {expense.map((expense) => (
                    <tr>
                    <td>{expense.amount}</td>
                    <td>{expense.shopping}</td>
                    <td>{expense.date}</td>
                    <td>{expense.category}</td>
                    <td className="table-actions">
                        <button className="btn-delete">Delete</button>
                         <button className="btn-edit">Edit</button>
                          <button className="btn-readmore">View</button>
                    </td>
                </tr>
            ))}
                
                <tr className="expense-total">
                    <td colSpan={5}>total: ₹2,000</td>
                </tr>

            </tbody>
        </table>
       </div>
    );
}
export default ExpenseList