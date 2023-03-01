import "./App.css";
import Card from "./components/UI/Card";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const INITIAL_EXPENSES = [
  { title: "Car Insurance", amount: 29257.11, date: new Date(2021, 2, 28) },
  { title: "Karate Lesson", amount: 5297.11, date: new Date(2020, 3, 25) },
  { title: "Massage Chair", amount: 1297.11, date: new Date(2011, 6, 11) },
  { title: "Beauty Products", amount: 2397.11, date: new Date(2021, 5, 1) },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div>
        <Expenses items={expenses}></Expenses>
      </div>
    </Card>
  );
};

export default App;
