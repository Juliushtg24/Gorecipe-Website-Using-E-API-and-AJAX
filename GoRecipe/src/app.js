import "regenerator-runtime";
import "./styles/style.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import main from "./script/view/main.js";

$(document).ready(() => {
  main();
});
