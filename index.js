let content = document.querySelector("#content");
let find = document.getElementById("find");
let lookup = document.getElementById("lookup");

lookup.addEventListener("click", (e) => {
  e.preventDefault();
  //    let contents = content.split("")
  let words = content.value;
  let value = find.value;
  let array = words.split(" ");
  let count = 0;

  let filtered = array.forEach((val, index, array) => {
    if (val === value) {
      count++;
    }
  });
  console.log(count);
  let display = document.getElementById("display");
  display.innerHTML = ` ${count} matchs found`;
});
