import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  return (
    <div className="expenses container-fluid">
      {props.expenses.map((ele, ind) => (
        <ExpenseItem
          key={ind}
          date={ele.date}
          title={ele.title}
          price={ele.price}
        />
      ))}
    </div>
  );
}
