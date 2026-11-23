import "../style/EditModel.css";

function EditModel() {
  return (
    <div className="model">
        <div className="form-box">
            <form>
                <h1>
                    Edit Expense
                </h1>

                <input type="number" 
                name="amount" 
                defaultValue=""
                placeholder="Amount"/>

                 <input type="text" 
                name="description" 
                defaultValue=""
                placeholder="Description"/>

                <input type="date"
                name="date"
                defaultValue=""/>

                <label htmlFor="category">Category:</label>
                <select id="category"name="category"defaultValue="">

                <option value="">Select Category</option>
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
                <option value="Transportation">Transportation</option>
                <option value="education">Education</option>
                <option value="phoneBill">PhoneBill</option>
                <option value="entertainment">Entertainment</option>
                </select>

                <div className="model-btn">
                    <button className="edit">
                        Update
                    </button>
                    
                    <button className="cancel">
                        Cancel
                        </button>
                </div>

            </form>
        </div>
    </div>
        
    
      
   
  )
}

export default EditModel
