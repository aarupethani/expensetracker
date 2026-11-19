import "../style/ExpenseForm.css";

export default function ExpenseForm(){
    return(<div className="ExpenseForm">
        <form>
            <h1>Expense Form</h1>
            <input type="number" name="amount" placeholder="enter amount..."/>
            <input type="text" name="description" placeholder="enter description.."/>
            <input type="date" name="date" placeholder="enter date.."/>

            <label htmlFor="category">Category:</label>
            <select id="category" name="category"defaultValue="">
                <option value="">select category</option>
                <option value="food">Food</option>
                 <option value="shopping">Shopping</option>
                  <option value="transportation">Transportation</option>
                   <option value="education">Education</option>
                    <option value="phoneBill">PhoneBill</option>
                     <option value="entertainment">Entertainment</option>
            </select>

            <div className="btn">
                <button type="button">Add Expense</button>
                
            </div>
        </form>

    </div>
        
    );
}
