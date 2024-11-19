import Form from "./components/form.js";
import H2 from "./components/h2.js";

const app =document.getElementById("app");

app.innerHTML = H2("Hello, World!");
app.innerHTML += Form();

const form = document.querySelector("form");

form.addEventListener("submit", (formSubmissionEvent) =>{
  formSubmissionEvent.preventDefault();

  console.log(formSubmissionEvent.target.text.value);
});

 



