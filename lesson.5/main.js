//  functions 
// let const (var)

// const number = '+996 500 355 335'

// let kanat = checkNumber(number, '+996 500 355 335')

// const number2 = '+996 222 222 555'

// let kanat2 = checkNumber(number2, '+996 222 222 555')

// console.log(kanat);
// console.log(kanat2);


// function checkNumber (num, phone){
//     if(num === phone){
//         return true
//     }
// }

//  DOM  document Object Modal 
// Find Element (h1-h6, p, div)
//getElementById()   #id
//getElementsByTagName()   div, button, img, ul
//getElemenetsByClassName()   text_canter_class


// NEW 
//querySelector()   div, text_center
//querySelectorAll()  div. button, img

const h1Tag = document.querySelectorAll('h1')  // find be tag name
console.dir(h1Tag)
//for loop

for(let i = 0; i< h1Tag.length; i++){
    if(i < 2){
        h1Tag[i].style.background = 'darkgreen'
    }else if( i < 4){
        h1Tag[i].style.background = 'darkred'
    }
    h1Tag[i].innerText = h1Tag[i].innerText + ' World'
    h1Tag[i].style.color = 'red'
    h1Tag[i].style.fontSize = '50px'
    h1Tag[i].style.fontFamily = 'Instrument Sans, sans-serif'
    h1Tag[i].style.textAlign = 'center'
    h1Tag[i].style.width = '500px'
    h1Tag[i].style.height = '100px'
    h1Tag[i].style.display = 'flex'
    h1Tag[i].style.flexDirection = 'row'
    h1Tag[i].style.justifyContent = 'center'
    h1Tag[i].style.alignItems = 'center'
    h1Tag[i].style.flexWrap = 'wrap'
}


const cars = [{
    model:"Audi",
    price: 2220,
    color: 'black',
    img: "https://avatars.mds.yandex.net/get-verba/216201/2a0000017f6e15f4368df3112afb695baac4/cattouchret"
  },
                {
    model:"BMW",
    price: 4220,
    color: 'blue',
    img: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-performance-automobile/i7-m70-xdrive/bmw-i7-m70-stage-teaser.png.asset.1681387862051.png"
  },
               
               ]


const div = document.querySelector('#list')

for( const car of cars ){
    div.innerHTML += `
    <div class="card">
        <div>
            <img src=${car.img} width="200"  />
        </div>
        <div>
            <h1>${car.model}</h1>
            <h1>${car.price} $ </h1>
            <h1>${car.color} </h1>
        </div>
    <div>`
}