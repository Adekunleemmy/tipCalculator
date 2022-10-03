const text1 = document.querySelector("#billInput");
const text2 = document.querySelector("#tipInput");
const result = document.querySelector("#total");
let person = document.querySelector("#people")

function render() {
  money = Number(text1.value);
  tip = Number(text2.value);
  let percentage = (tip / 100) * money;
  let add = money + percentage
  let people = Number(person.innerText)
  let ans = add/people
  result.innerText = `$${ans.toFixed(2)}`;
}

function increase(){
  let show = Number(person.innerHTML)
  show++
  person.innerHTML = show
  console.log("working")
  render()
}

function decrease(){
  let show = Number(person.innerHTML)
  show--
   if (show < 1) {
     return;
   }
  person.innerHTML = show
  render()
}
