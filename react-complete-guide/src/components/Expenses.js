import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
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

  const selectFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div className="expenses">
      <div>
        <ExpensesFilter selectedYear={filteredYear} onSlecetFilter={selectFilterHandler} />
      </div>
      <div>{expenses}</div>
    </div>
  );
}

export default Expenses;
