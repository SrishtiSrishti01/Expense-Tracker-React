import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useDispatch, useSelector } from "react-redux";
import { dltTransaction } from "../features/transacSlice";

function Transaction({ transaction }) {
  // const { dltTransaction } = useContext(GlobalContext);
  const dispatch = useDispatch();
  // const transactions = useSelector((state) => state.transac.transactions);

  const sign = transaction.amount < 0 ? "-" : "+";
  const cusClass = transaction.amount < 0 ? "minus" : "plus";
  return (
    <li className={cusClass} key={transaction.id}>
      <span style={{ overflow: "auto", marginRight: "80px" }}>
        {" "}
        {transaction.text}{" "}
      </span>

      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => dispatch(dltTransaction(transaction.id))}
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
