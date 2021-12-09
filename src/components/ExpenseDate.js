import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <>
      <div className="col-sm-3 date">
        <span>{day}</span>
        <span>{month}</span>
        <span>{year}</span>
      </div>
    </>
  );
}
