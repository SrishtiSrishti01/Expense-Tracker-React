import "./App.css";

import { Route, Router, Routes } from "react-router";
import Pdf from "./components/Pdf";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* </Routes>
      <Routes> */}
        <Route path="pdf" element={<Pdf />}></Route>
      </Routes>{" "}
    </>
  );
}

export default App;
