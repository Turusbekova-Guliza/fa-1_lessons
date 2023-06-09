const btnForm = document.getElementById("submit");
const uEmailInput = document.getElementById("email");
const uPasswordInput = document.getElementById("password");
const localUser = JSON.parse(localStorage.getItem('user'))

let userData = {
  name: "Guliza",
  email: "guliza@gmail.com",
  password: 123456,
};

let user2 = {
  name: "Asema",
  email: "tzirw@example.com",
  password: 654321,
};

btnForm.onclick = (e) => {
  e.preventDefault();
  if (
    userData.email == uEmailInput.value &&
    userData.password == uPasswordInput.value
  ) {
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Welcome User");
    window.location.href = "http://127.0.0.1:5500/hm-oDengi/";
  } else if (
    user2.email == uEmailInput.value &&
    user2.password == uPasswordInput.value
  ) {
    localStorage.setItem("user", JSON.stringify(user2));
    alert("Welcome User");
    window.location.href = "http://127.0.0.1:5500/hm-oDengi/";
  }
  uPasswordInput.value = "";
  uEmailInput.value = "";
};
