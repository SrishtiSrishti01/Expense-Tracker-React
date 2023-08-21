import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function Pdf() {
  const transactions = useSelector((state) => {
    console.log(state);
    return state.transac.transactions;
  });
  console.log(transactions);
  const spent = transactions.reduce(
    (acc, curr) => (curr < 0 ? acc + curr : 0),
    0
  );
  const gain = transactions.reduce(
    (acc, curr) => (curr > 0 ? acc + curr : 0),
    0
  );

  return (
    <div className="transaction-container">
      <h3>Transaction History</h3>
      <br />
      <div className="transac-list-heading" style={{ display: "flex" }}>
        <div>Date</div>
        <div>Details</div>
        <div>Amount</div>
      </div>
      <div className="transac-detail-container">
        <ol
          style={{
            paddingInlineStart: "0px",
          }}
          className=""
        >
          {transactions.map((transac) => (
            <li key={transac.id}>
              <ListItem transac={transac}></ListItem>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Pdf;
