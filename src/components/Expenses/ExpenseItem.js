import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
import Card from "../UI/Card";
import { click } from "@testing-library/user-event/dist/click";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHanlder = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expensew-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHanlder}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
