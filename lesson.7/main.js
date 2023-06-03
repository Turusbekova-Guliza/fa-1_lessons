//---------functions------------

//let userName = "zarina"
//hello ("aruuke","zarina","jakyp");
//function hello(name, name2, name3){
    //hoisting
  //    alert(" hello " + name);
    //  alert(" hello " + name2);
      //alert(" hello " + name3);
//}


//-------------return---------------


// const user = {
//     name: 'Guliza',
//     phone: '+996220453898',
//     email: 'tugrp@example.com',
//     address: {
//         city: 'Tashkent',
//         street: 'Chui'
//     }
//   }
  
//   function getName(obj) {
//       return obj.name
//   }  

// function getSomeKey (key, obj) {
//     return {
//         [key]: obj[key],
//     }
// }



//   const name = getSomeKey('name', user)
//   const phone = getSomeKey('phone', user)
//   console.log('name:', name);
//   console.log('phone: ', phone);



//----------виды функции--------

// function declaration v1

// function declarationFn() {
//     console.log("I'm declaration function" );
    
// }

// // function expression v2

// const expressionFn = function() {
//     console.log("I'm expression function" );
// }

// // arrow function () => {}

// const arrowFn = () => {}
// console.log("I'm arrow function");

// ------------ calculator-----------

const Calculator = {
    sum: (a, b) => a + b,
    min: (num1, num2) => num1 - num2,
    multiply: (p1, p2) => p1 * p2,
    divide: (a, b) => a / b,
    subtract: (a, b) => a - b,
    pow: (a, b) => a ** b,
}

const res = Calculator.pow(500, 100)
console.log('res: ', res);

//---------callbackFuncktion----------

const array1 = ['item', 'item2', 'item3']

const array2 = ['item4']

function getArray(arr1, arr2){
    if(arr1.length > arr2.length){
        return arr1;
    }else if (arr2.length > arr1.length){
        return arr2;
    }else {
        return 'Они равны'
    }
}

const newArr = getArray(array1, array2)
console.log("newArr: ", newArr);


function someName () {
    const randomNum = ~~(Math.random() * 100)
    if (randomNum < 50) {
        alert('hi')
        } else if (randomNum > 50) {
            alert('hello')
        }
        console.log(randomNum);
}

someName()