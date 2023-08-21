import React from "react";
import { styles } from "./PdfStyles.css";

function ListItem({ transac }) {
  return (
    <div className="transac-list">
      <div>
        {/* {transac.date.getdate()}/{transac.date.getMonth()}/
  {transac.date.getYear()} */}
        {transac.date.toString()}
      </div>
      <div>{transac.text}</div>
      <div>{transac.amount}</div>
    </div>
  );
}

export default ListItem;
