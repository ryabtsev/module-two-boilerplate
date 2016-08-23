import { handleSearch } from "lib/handlers";


import 'bootstrap/dist/css/bootstrap.css'
import "./main.css"
import "./images/spinner.gif"

document.addEventListener("DOMContentLoaded", () => {
  																														const button = document.getElementById("search");
  																														button.addEventListener("click", handleSearch);
});
