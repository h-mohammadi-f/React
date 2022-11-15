import { useState } from "react";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  // const expenses = [];
  // props.expensesArray.forEach((element) => {
  //   expenses.push(
  //     <ExpenseItem
  //       title={element.title}
  //       date={element.date}
  //       amount={element.amount}
  //     />
  //   );
  // });

  const selectFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expensesArray.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses">
      <div>
        <ExpensesFilter
          selectedYear={filteredYear}
          onSlecetFilter={selectFilterHandler}
        />
      </div>
      <ExpensesChart expenses={filteredExpenses}/>
      {/* <div>{expenses}</div> */}
      <ExpensesList items={filteredExpenses}/>
    </div>
  );
}

export default Expenses;