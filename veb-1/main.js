// dom

const form = document.getElementById('form')

const userData = {
    name: 'USER',
    email: 'tzirw@example.com',
    nikName: 'guliza_1',
    password: '123456'
}

form.onsubmit = (e) => {
    e.preventDefault()
    console.log(e.target, '-----?-----');
    const formData = e.target
    const formEmail = formData.email.value
    console.log('formEmail:', formEmail);
    const formPassword = formData.password.value
    console.log('formPassword:', formPassword)
    if (userData.email === formEmail && userData.password === formPassword) {
        alert('WELCOME ' + userData.name)
        window.location.href = 'https://www.google.com/'
    }else {
        alert('Email or Password Wrong')
    }
}

//DOM ELEMENTY

const btnMinus = document.getElementById ('minus')
const btnPlus = document.getElementById ('plus')
const pText = document.getElementById ('text-count')
const price = document.getElementById('price')

//onclick

btnPlus.onclick = () => {
    pText.innerText = parseInt(pText.innerText) + 1
    price.innerText = 500 * parseInt(pText.innerText) + '&'
}

btnMinus.onclick = () => {
    if(parseInt(pText.innerText) > 0){
        pText.innerText = parseInt(pText.innerText) - 1
        price.innerText =  500 *  parseInt(pText.innerText) + '$'
    }
}