import ExpenseItem from "./ExpenseItem";

import './Expenses.css';

function Expenses(props) {
  const expenses = [];
  props.expensesArray.forEach((element) => {
    expenses.push(
      <ExpenseItem
        title={element.title}
        date={element.date}
        amount={element.amount}
      />
    );
  });

  return <div className="expenses">{expenses}</div>;
}

export default Expenses;
