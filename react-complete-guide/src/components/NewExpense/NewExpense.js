import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpeneData) => {
    const expenseData = {
      ...enteredExpeneData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const btnShowFormHandler = () => {
    setShowForm(true);
  };

  const closeCommandHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={btnShowFormHandler}>Add New Expenses</button>
      )}
      {showForm && (
        <ExpenseForm
          onCloseCommand={closeCommandHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
