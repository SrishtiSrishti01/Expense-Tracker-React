import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useState } from "react";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import { Navigate, useNavigate } from "react-router";

function Home() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const downloadPDF = () => {
    navigate("/pdf");
    const capture = document.querySelector(".receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="receipt">
          <Balance></Balance>
          <IncomeExpenses></IncomeExpenses>
          <TransactionList></TransactionList>
        </div>

        <AddTransaction></AddTransaction>
      </div>
      <div>
        <button onClick={downloadPDF} disabled={!(loader === false)}>
          {loader ? <span>Downloading</span> : <span>Download</span>}
        </button>
      </div>
    </div>
  );
}

export default Home;
