/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  document.querySelector("#motivo").addEventListener("click", () => {
    document.querySelector("#motivo").innerHTML = excusa();
  });
};

const excusa = function() {
  let first = who[Math.floor(Math.random() * 4)];
  let second = action[Math.floor(Math.random() * 4)];
  let third = what[Math.floor(Math.random() * 4)];
  let fourth = when[Math.floor(Math.random() * 4)];
  return first + " " + second + " " + third + " " + fourth;
};
