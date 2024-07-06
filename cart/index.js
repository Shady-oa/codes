let cartQuantity = 0;
let out = document.getElementById("container");

let Add = document.getElementById("add");
Add.addEventListener("click", function () {
  cartQuantity = cartQuantity + 1;

  out.textContent = ` cart Quantity : ${cartQuantity}`;
});

let Add2 = document.getElementById("Add2");
Add2.addEventListener("click", function () {
  cartQuantity = cartQuantity + 2;
  out.textContent = ` cart Quantity : ${cartQuantity}`;
});

let Add3 = document.getElementById("Add3");
Add3.addEventListener("click", function () {
  cartQuantity = cartQuantity + 3;
  out.textContent = ` cart Quantity : ${cartQuantity}`;
});

let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  cartQuantity = 0;
  out.textContent = ` cart Quantity : ${cartQuantity}`;
});
let quantity = document.getElementById("quanity");
quantity.addEventListener("click", function () {
  out.textContent = ` cart Quantity : ${cartQuantity}`;
});
