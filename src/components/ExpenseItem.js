import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const [newtitle, setnewTitle] = useState("");

  // const changeTitle = (e) => {
  //   setnewTitle(e.target.value);
  // };

  // const handleClick = () => {
  //   setTitle(newtitle);
  // };

  return (
    <div className="row wrap">
      <ExpenseDate date={props.date} />
      <div className="col-sm-7 text-center">{props.title}</div>
      <div className="col-sm-2 priceBtn">${props.price}</div>
      {/* <div className="col-sm-3">
        <input type="text" value={newtitle} onChange={changeTitle} />
        <button className="click" onClick={handleClick}>
          Click
        </button>
      </div> */}
    </div>
  );
}
