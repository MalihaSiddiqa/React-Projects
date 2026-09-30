import { useState } from "react";

function Expenses() {
  const [expList, setexpList] = useState([]);
  const [newExp, setNewExp] = useState("");
  const [amount,setAmount]=useState(0)

  const addexpenseToTheList = () => {
    if (!newExp.trim() || Number(amount) <= 0) return;

    const expense = {
      id:Date.now(),
      expenseName: newExp,
      expenseAmount:Number(amount),
    };
    setexpList([...expList, expense]);
    setNewExp("");
    setAmount("")
  };
  const deleteExp= (delexp) => {
    setexpList(expList.filter((exp) => exp.expenseName !== delexp));
  };

const totalExpenses=expList.reduce((acc,exp)=>{
  return acc + Number(exp.expenseAmount || 0);
},0)
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="navBar">
        <input
          className="searchBar"
          type="text"
          placeholder="Expense Name"
          onChange={(e) => setNewExp(e.target.value)}
          value={newExp}
        />
        <input className="searchBar"
        type="number"
        placeholder=" Enter Amount "
        onChange={(e)=> setAmount (e.target.value)}
        value={amount}
        />
        <button className="addTask" onClick={addexpenseToTheList}>
          +
        </button>
      </div>
      <ul className="todoList">
        {expList.map((exp) => (
         <li key={exp.id}> <span>{exp.expenseName} </span> 
         <span>${exp.expenseAmount}</span>
            <button className="btn" onClick={() => deleteExp(exp.expenseName)}>
              Delete
            </button>
          </li>
        ))}
        <li>Total: ${totalExpenses}</li>
      </ul>
    </div>
  );
}

export default Expenses;
