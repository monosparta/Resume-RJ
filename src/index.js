import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Resume from "./Pages/Resume";
import Login from "./Pages/Login";
import Singup from "./Pages/Singup";
import reportWebVitals from "./reportWebVitals";
import MyLayout from "./Components/MyLayout.js";
ReactDOM.render(
  <Router>
    <MyLayout>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </MyLayout>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
