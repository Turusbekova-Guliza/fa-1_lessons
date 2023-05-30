const pTag = document.getElementById('balance')
pTag.innerText = pTag.innerText + '$'

const inputBtn = document.getElementById('input__btn') 
const btnSend = document.getElementById('send__money')
btnSend.onclick = ()  => {
    if (parseInt(pTag.innerText) > 0){
        pTag.innerText = parseInt(pTag.innerText) - 1 + '$'
    }
}