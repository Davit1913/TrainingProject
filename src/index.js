import alertFun, { obj } from "./app";

let root = document.getElementById("root");
root.onclick = alertFun;

root.innerHTML = "TEST";