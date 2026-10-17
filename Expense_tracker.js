const nam = document.querySelector("#name");
const amount = document.querySelector("#amount");
const total = document.querySelector(".total");
const list = document.querySelector(".list");
let arr = [];
document.querySelector(".add").addEventListener("click", () => {
  if (nam.value.trim() !== "") {
    arr.push({ nam: nam.value, amount: amount.value });
    nam.value = "";
    amount.value = "";
    display();
    localStorage.setItem("user", JSON.stringify(arr));
  }
});
function display() {
  let show = "";
  let sum = 0;
  arr.forEach((expense) => {
    show += `<li><p>${expense.nam}</p><p>${expense.amount}</p><button class="remove">Remove</button></li>`;
    sum += Number(expense.amount);
  });
  list.innerHTML = show;
  total.innerHTML = `₹${sum}`;
  document.querySelectorAll(".remove").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      arr.splice(index, 1);
      display();
      localStorage.setItem("user", JSON.stringify(arr));
    });
  });
}
window.onload = function () {
  let saved = localStorage.getItem("user");
  if (saved) {
    arr = JSON.parse(saved);
    display();
  }
};
