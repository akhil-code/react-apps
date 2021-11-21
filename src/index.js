import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Notes from "./components/notes";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import * as bootstrapjs from "bootstrap/dist/js/bootstrap.js";

ReactDOM.render(
    <React.StrictMode>
        <Notes />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
