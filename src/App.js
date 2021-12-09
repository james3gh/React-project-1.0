import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

export default function App() {
  let dummy_Expenses = [
    {
      id: 1,
      title: "School Fee",
      price: 300,
      date: new Date(2021, 5, 21),
    },
    {
      id: 2,
      title: "Books",
      price: 100,
      date: new Date(2021, 2, 30),
    },
    {
      id: 3,
      title: "House Rent",
      price: 700,
      date: new Date(2021, 4, 11),
    },
    {
      id: 4,
      title: "Food",
      price: 520,
      date: new Date(2021, 5, 3),
    },
  ];

  const newExpenseData = (newData) => {
    const data = [newData, ...dummy_Expenses];
    console.log(data);
    setexpenses(data);
  };

  const [expenses, setexpenses] = useState(dummy_Expenses);

  return (
    <div>
      <NewExpense newExpenseData={newExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
}
