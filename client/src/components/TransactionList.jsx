import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import { useSelector } from "react-redux";
function TransactionList() {
  // const { transactions } = useContext(GlobalContext);
  const transactions = useSelector((state) => state.transac.transactions);

  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          ></Transaction>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
