// ++++++++++ IF ++++++++++++

// comparision  ... <, >, >=, ,<=, !=, == 

const isuserloggedin = true 
const temperature = 51

if (temperature < 50) {
// console.log("less then 50");
} else {
// console.log("temperature high")
}

const score = 200

if (score > 100) {
    const power = "fly"
    // console.log(`user power: ${power}`);
}

// const balance = 1000
//  if (balance > 500)  //console.log("test");



//  if (balance < 500) { 
//     console.log("less then 500")
//  } else if (balance < 750) {
//     console.log("less then 500")
//  } else if (balance < 900) {
//     console.log("less then 900")
//  }  else if (balance == 1000) {
//     console.log(" 1000")
//  }
//  else {
//     console.log("less then 1202")
//  }



const userloggedin = true  
const debitcard = true
const userloggedinfromgoole = false 
const userloggedinfromemail = true 

if (userloggedin && debitcard && 2==2) {
console.log("allow to login");
}

if (userloggedinfromgoole || userloggedinfromemail) {
console.log("user logged in");
}


