import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 29257.11, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 5297.11, date: new Date(2020, 3, 25) },
    { title: "Car Insurance", amount: 1297.11, date: new Date(2011, 6, 11) },
    { title: "Car Insurance", amount: 2397.11, date: new Date(2021, 5, 1) },
  ];

  return (
    <div>
      <h2>Let's get Started</h2>
      <br></br>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
