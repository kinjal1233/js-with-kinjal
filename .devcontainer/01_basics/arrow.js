const user = {
    username: "kinjal",
    price: 999,

    welcomemessage: function() {
        // console.log(`${this.username}, welcome to website`);
//   console.log(this);
    }
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);


// function chai() {
//     let username = "kinjal"
//     // console.log(this);
// }
// chai()

// const chai1 = function() {
//     let username = "kinjal"
//     console.log(this.username);
// }

// chai1 ()


//  ++++++++++++  arrow function +++++++++++=

const  chai = () => {
    let username = "kinjal"
     console.log(this);
}
//  chai()

// +++++++++++++  basic arrow fun. +++++++++++++++++++


// const addTwo = (num1 , num2) => {
    //     return num1 + num2
    // }
    

// +++++++++++++++++ implicit return ++++++ where return keyword is not imp
//  const addTwo = (num1, num2) = num1 + num2

//  const addTwo = (num1 , num2) =>  (num1 , num2)

 const addTwo = (num1, num2) => ({username: "kinjal"})
 
console.log(addTwo(8, 5));