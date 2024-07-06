let like = document.querySelector(".like");
like.addEventListener("click", function () {
  if (like.innerText === "Like") {
    like.innerText = "Unlike";
    like.classList.add("liked");
    document.title = "Button liked";
  } else {
    like.innerText = "Like";
    like.classList.remove("liked");
    document.title = "Button Unliked";
  }
});

let myList = [];
let inputField = document.querySelector(".field");

function renderList() {
  myList.push(inputField.value);

  let listContainer = document.querySelector(".listItems");
  listContainer.innerHTML = ""; // Clear previous list items

  for (let i = 0; i < myList.length; i++) {
    listContainer.innerHTML += `
    <p>${myList[i]}
      <button onclick="myList.splice(${i}, 1);renderList();">Delete</button>
    </p>`;
  }
  console.log(listContainer);
  inputField.value = "";
}

/* setTimeout(function () {
  console.log("hello");
}, 4000); */

let minutes = 0;
let minute = document.querySelector(".minutes");
let seconds = 0;
let second = document.querySelector(".seconds");
setInterval(function () {
  seconds += 1;
  second.innerText = seconds;
  if (seconds == 60) {
    minutes += 1;
    minute.innerText = minutes;
    seconds = 0;
    second.innerText = seconds;
  }
}, 1000);
