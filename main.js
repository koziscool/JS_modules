
import text from "./module.js"
import {more} from "./another.js"

window.addEventListener("DOMContentLoaded", function() {
  console.log("tetris");
  var elt = document.getElementById("grid-2048");
  elt.innerText = text + " " +  more;
});
