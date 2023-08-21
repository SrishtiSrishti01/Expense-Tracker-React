import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useSelector, useDispatch } from "react-redux";
import { addTransaction } from "../features/transacSlice";
function AddTransaction() {
  // const { AddTransaction } = useContext(GlobalContext);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const d = new Date();
    const newTrans = {
      id: crypto.randomUUID(),
      text,
      amount: +amount,
      // date: new Date().toString(),
      date:
        d.getDate() +
        "/" +
        d.getMonth() +
        "/" +
        d.getFullYear().toString().slice(-2),
    };
    console.log(d);
    console.log(d.get);
    console.log(newTrans.date);
    // AddTransaction(newTrans);
    dispatch(addTransaction(newTrans));
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, postive - income)
          </label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
