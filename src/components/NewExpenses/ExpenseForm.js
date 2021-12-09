import React, { useState } from "react";

export default function ExpenseForm(props) {
  const [title, settitle] = useState("");
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");

  const formTitleChange = (e) => {
    settitle(e.target.value);
  };
  const formAmountChange = (e) => {
    setamount(e.target.value);
  };
  const formDateChange = (e) => {
    setdate(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      price: amount,
      date: new Date(date),
    };

    props.getData(data);

    settitle("");
    setamount("");
    setdate("");
  };

  return (
    <form action="" onSubmit={submitForm}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          value={title}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Title Here...."
          onChange={formTitleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Amount
        </label>
        <input
          type="number"
          value={amount}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Amount here.."
          onChange={formAmountChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Date
        </label>
        <input
          type="date"
          value={date}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="dd-mm-yyyy"
          onChange={formDateChange}
        />
      </div>
      <button type="submit" className="btn btn-warning">
        Add Expense
      </button>
    </form>
  );
}
