import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const receiveData = (data) => {
    const finalData = {
      id: Math.floor(Math.random() * 101),
      ...data,
    };
    props.newExpenseData(finalData);
    // console.log(finalData);
  };
  return (
    <div className="formInput">
      <ExpenseForm getData={receiveData} />
    </div>
  );
}
