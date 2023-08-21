import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useSelector } from "react-redux";

function Balance() {
  // const { transactions } = useContext(GlobalContext);
  const transactions = useSelector((state) => state.transac.transactions);
  const total = transactions
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  const sign = total < 0 ? "-" : "+";
  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {sign}${Math.abs(total)}
      </h1>
    </>
  );
}

export default Balance;
