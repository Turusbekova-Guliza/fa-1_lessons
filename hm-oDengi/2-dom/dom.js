const btnForm = document.getElementById("submit");
const uEmailInput = document.getElementById("email");
const uPasswordInput = document.getElementById("password");

let userData = {
  name: "guliza",
  email: "guliza@gmail.com",
  password: 123456,
};

btnForm.onclick = (e) => {
  e.preventDefault();
  if (
    userData.email == uEmailInput.value &&
    userData.password == uPasswordInput.value
  ) {
    alert("Welcome Guliza");
    window.location.href = "http://127.0.0.1:5500/hm-oDengi/";
  } else {
    alert("Email or Password Wrong");
  }
  uPasswordInput.value = ''
  uEmailInput.value = ''
};
