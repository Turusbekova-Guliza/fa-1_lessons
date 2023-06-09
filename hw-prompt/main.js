let email = prompt ('enter your email or login')
let pass = prompt ('enter your password')
// email
// pass
let userDB ={
    u_email: 'turusbekovaguliza@gmail.com',
    u_pass: '123456',
}

if (userDB.u_email === email && userDB.u_pass === pass){
    alert("Welcome")
}else {
    alert("Wrong email or password")
}