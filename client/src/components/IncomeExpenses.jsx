import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useSelector } from "react-redux";

function IncomeExpenses() {
  // const { transactions } = useContext(GlobalContext);
  const transactions = useSelector((state) => state.transac.transactions);

  const incomeArr = transactions.filter((item) => item.amount > 0);
  const expenseArr = transactions.filter((item) => item.amount < 0);

  const income = incomeArr
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);
  const expense = expenseArr
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(expense)}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
