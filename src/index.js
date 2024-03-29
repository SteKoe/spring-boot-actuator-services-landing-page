import ReactDOM from "react-dom";
import {App} from "./App";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/js/all.min"
import "./index.css"
import {worker} from "./mocks/worker";

if (process.env.NODE_ENV === "development") {
    worker.start();
}

const app = document.getElementById("app");
ReactDOM.render(<App/>, app);