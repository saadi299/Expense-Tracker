import ExpenseItem from "./components/ExpenseItem";
import AssignmentExpenseItem from "./components/AssignmentExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const assignmentExpense=[
    {
      id: "e5",
      title: "Bike Modification",
      amount: 5450,
      date: new Date(2021, 6, 2021),
    },
    {
      id: "e6",
      title: "Car Modification",
      amount: 5450,
      date: new Date(2021, 6, 2021),
    },


  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <AssignmentExpenseItem 
      myTitle={assignmentExpense[0].title}
      myAmount={assignmentExpense[0].amount}
      myDate={assignmentExpense[0].date}
      ></AssignmentExpenseItem>
      <AssignmentExpenseItem 
      myTitle={assignmentExpense[1].title}
      myAmount={assignmentExpense[1].amount}
      myDate={assignmentExpense[1].date}
      ></AssignmentExpenseItem>
  
    </div>
  );
}

export default App;
