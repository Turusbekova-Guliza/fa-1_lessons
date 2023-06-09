const pTag = document.getElementById("balance");
pTag.innerText = pTag.innerText + "$";

const inputBtn = document.getElementById("input__btn");
const btnSend = document.getElementById("send__money");
const depBtn = document.getElementById("deposit");
const withBtn = document.getElementById("withdrawal");
const depInput = document.getElementById("dep-number");
const withInput = document.getElementById("with-input");
const userInput = document.getElementById("input__user-name");

let userNumber = 987654321;

depBtn.onclick = () => {
  pTag.innerText = user1.balance + parseInt(depInput.value) + "$";
  depInput.value = "";
};

withBtn.onclick = () => {
  if (parseInt(withInput.value) > Number(pTag.innerText)) {
    alert(
      "There is not enough money on your balance. Your balance:" +
        pTag.innerText
    );
  }
  pTag.innerText = user1.balance - parseInt(withInput.value) + "$";
  withInput.value = "";
};

btnSend.onclick = () => {
  if (parseInt(pTag.innerText) > 0 && parseInt(userInput.value) === user2.num) {
    pTag.innerText = user1.balance - parseInt(inputBtn.value) + "$";
  }
};



const date = new Date();
const user1 = {
  num: 1234567890,
  name: "Guliza",
  lastName: "Turusbekova",
  balance: 50,
  status: "VIP",
  date: `0${date.getMonth()}.${date.getDate()}.${date.getFullYear()}`,
};

const user2 = {
  num: 0987654321,
  name: "Asema",
  lastName: "Turusbekova",
  balance: 100,
  status: "SLIVER",
  date: `0${date.getMonth()}.${date.getDate()}.${date.getFullYear()}`,
};

// DOM USER ELEMENT
const userName = document.getElementById("user-name");
const userDate = document.getElementById("user-date");
const userStatus = document.getElementById("user-status");
const userLastName = document.getElementById("user-lastName");

const localUser = JSON.parse(localStorage.getItem("user"));

function renderUser(user) {
  if (user.name === user1.name) {
    userName.innerText = user1.name;
    userDate.innerText = user1.date;
    userStatus.innerText = user1.status;
    // userLastName.innerText = user1.lastName;
    pTag.innerText = user1.balance;
  }
  if (user.name === user2.name) {
    userName.innerText = user2.name;
    userDate.innerText = user2.date;
    userStatus.innerText = user2.status;
    // userLastName.innerText = user2.lastName;
    pTag.innerText = user2.balance;
  }
}

renderUser(localUser);
