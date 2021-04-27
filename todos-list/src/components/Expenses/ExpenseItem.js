import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React');
  //let title = props.title;
  // const clickHandler = () => {
  // setTitle('Updated!');
  // console.log(title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
//   const expenseDate = new Date(2021, 2, 28);
//   const expenseTitle = "Car Insurance";
//   const expenseAmount = 294.67;
