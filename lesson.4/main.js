//for loop 

// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');

for (let i = 0; i < 150; i++){
    // console.log('hello', i);
}

const names = ['Guliza', 'Akylai', 'Nazima', 'Umar']
//                0          1        2        3
//МАССИВ === length 

//index === value
//0,1,2 === name
// console.log(names[0]);     //Guliza
// console.log(names[1]);     //Akylai/
// console.log(names[2]);     //Nazima
// console.log(names[3]);     //undefined


// console.log(names); // [....]

for (let i = 0; i < names.length; i++){
    // console.log('hello', names[i]);
}
//      % 5  COCA
//      % 3  COLA

for (let san = 1; san <100; san++) {
    if (san % 5 === 0 && san % 3 === 0){
        // console.log('COCA');
        console.log(' COCA COLA', san);
    }
}

let name = 'Adahan' 

for (let tamga = 0; tamga< name.length; tamga++){
    // console.log(name[tamga].toLowerCase());
    if (name[tamga].toLowerCase() === 'a'){
        console.log(name[tamga].toLowerCase());
    }
}

//  forof

for (const t of name) {
    if (t.toUpperCase() === 'A'){
        console.log(t.toUpperCase());
    }
}


//forin 

const user = {
    name: 'Adahan',
    age: 25,
    gender: 'male'
}

// console.log(user.name);  //Adahan
// console.log(user.age);  //25
// console.log(user.gender);  //male

for (const key in user) {
    console.log(key, ':',user[key]);
}

let btn1 = document.querySelectorAll('button')

btn1.onclick = function () {
    document.body.style.background = btn1.innerText
}

// let btn = document.querySelector('#btn2')

// btn.onclick = function () {
//     document.body.style.background = btn.innerText
// }


// for (let i = 0; i < btn1.length; i++){
//     btn1[i].onclick = function () {
//         document.body.style.background = btn1[i].innerText
//     }