let myLead = [];
let inputEl = document.getElementById("input-el");
let unorder = document.getElementById("unordered");
let save = document.getElementById("input-btn");

save.addEventListener("click", function () {
  myLead.push(inputEl.value);
  const list = document.createElement("li");

  list.innerHTML += `
  <li>
  <a  target= '_Blank' href='${inputEl.value}' >
    ${inputEl.value}
  </a>
  </li> `;
  unorder.append(list);
  inputEl.value = "";

  console.log(myLead);
});

let container = document.getElementById("container");
container.innerHTML = "<button> buy!</button>";

let buy = document.getElementById("container");
buy.addEventListener("click", function () {
  container.innerHTML += "<p>Thank you for buying</p>";
});
