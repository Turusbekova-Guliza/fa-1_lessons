//  array metods

// variables

// var let const

// camelCase
let myNameIs = "";
// snake style
let my_name_is = "";
my_name_is = 45;

//  for loop
let nums = [22, 33, 44, 323, 232, 4343, 323, 3434, 3232, 434];
let res = 0;
for (const n of nums) {
  // 0 + 22 = 22
  // 22 + 33 = 55
  //55 + 44 = 99
  // 99 + 323 = 422
  res += n;
}

//   ctrl + shift + L
//   ctrl + Alt + F
//   win + V

console.log(res); // JOOP

const user1 = createUser("Jhon", 24);
console.log("user1: ", user1);
const user2 = createUser("Guliza", 17);
console.log("user2: ", user2);
function createUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

//  DOM
const users = [user1, user2];
const root = document.getElementById("root");

users.forEach((user, index) => {
  root.innerHTML += `
    <div>${index + 1}. ${user.name} ${user.age}<div>
    `;
});

const inputName = document.getElementById("enterName");
const inputAge = document.getElementById("enterAge");
const btn = document.getElementById("addUser");
btn.onclick = () => {
  const name = inputName.value;
  const age = inputAge.value;
  if (!inputName.value.length && !inputAge.value.length) {
    return;
  } else {
    users.push(createUser(name, age));
    root.innerHTML = "";
    users.forEach((user, index) => {
      root.innerHTML += `
          <div>${index + 1}. ${user.name} ${user.age}<div>
          `;
    });
    inputName.value = "";
    inputAge.value = "";
  }
};

const div = document.getElementById("div");

div.innerText = "GULIZA IS COOL";
div.style.fontFamily = "Poppins, sans-serif";
div.style.background = "dodgerblue";
div.style.color = "blueviolet";
div.style.width = "170px"
div.style.height = "50px"
div.style.display = 'flex'
div.style.alignItems = 'center'
div.style.justifyContent = 'center'

const btnAdd = document.getElementById('addlist')

btnAdd.onclick = () => {
  if(parseInt(btnAdd.innerText) < 10) {

    btnAdd.innerText = parseInt(btnAdd.innerText) + 1
  }
}
const btnMin = document.getElementById('minus')

btnMin.onclick = () => {
  if(parseInt(btnMin.innerText) > -10) {
    btnMin.innerText = parseInt(btnMin.innerText) - 1
  }
}

const btnHide = document.getElementById('hide')
const divHello = document.getElementById('hello') 
const btnShow = document.getElementById('show')

btnHide.onclick = () => {
    divHello.style.display = 'none'
}
btnShow.onclick = () => {
    divHello.style.display = 'block'
}