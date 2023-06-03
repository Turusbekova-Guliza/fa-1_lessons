const pTag = document.getElementById('balance')
pTag.innerText = pTag.innerText + '$'

const inputBtn = document.getElementById('input__btn')
const btnSend = document.getElementById('send__money')
const depBtn = document.getElementById('deposit')
const withBtn = document.getElementById('withdrawal')
const depInput = document.getElementById('dep-number')
const withInput = document.getElementById('with-input')

depBtn.onclick = () => {
    pTag.innerText = parseInt(pTag.innerText) + parseInt(depInput.value) + '$'
    depInput.value = ''
}

withBtn.onclick = () => {
    if( parseInt(withInput.value) > Number(pTag.innerText)) {
        alert('There is not enough money on your balance. Your balance:' + pTag.innerText)
    }
    pTag.innerText = parseInt(pTag.innerText) - parseInt(withInput.value) + '$'
    withInput.value = ''

}


btnSend.onclick = ()  => {
    if (parseInt(pTag.innerText) > 0){
        pTag.innerText = parseInt(pTag.innerText) - Number(inputBtn.value) + '$'
    }
}


const date = new Date()
const user1 = {
  name: 'Guliza',
  lastName: 'Turusbekova',
  status: 'VIP',
  date: `0${date.getMonth()}.${date.getDate()}.${date.getFullYear()}`
}
// DOM USER ELEMENT
const userName = document.getElementById('user-name')
const userDate = document.getElementById('user-date')
const userStatus = document.getElementById('user-status')
const userLastName = document.getElementById('user-lastName')

function renderUser(user) {
  userName.innerText = user.name
  userDate.innerText = user.date
  userStatus.innerText = user.status
  userLastName.innerText = user.lastName
}

renderUser(user1)