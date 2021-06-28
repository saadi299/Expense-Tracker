import "./AssignmentExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function AssignmentExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">
      <ExpenseDate date={props.myDate}/>
        <div className="expense-item__description">
          <h2>{props.myTitle}</h2>
          <div className="expense-item__price">${props.myAmount}</div>
        </div>
      </div>
    </div>
  );
}
export default AssignmentExpenseItem;
