// function sayMyName () {
//     console.log ("k");
//     console.log ("i");
//     console.log ("n");
//     console.log ("j");
//     console.log ("a");
//     console.log ("l");
// }

// sayMyName()

// function addTwoNumber (number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumber (number1, number2){

    // let result = number1 + number2
    return number1 + number2
}

const result = addTwoNumber(3, 4)
// console.log("result: ", result)
// addTwoNumber (3, 4)

function  loginUserMessage (username = "k"){

    if (username === undefined){
        // console.log("please enter your name")
        return
    }
    return `${username } just logged in`
}

// console.log(loginUserMessage ("kinjal"))




// rest oprator (...) also called (spred opretor)
function calculateCartPrice (...num1) {
return num1
}

// console.log(calculateCartPrice(200,2000,400))

const user = { 
    uname: "kkk",
    Price: 199
}

function handleObject (anyobject){
    // console.log(`username is ${anyobject.uname} and price is ${anyobject.Price}`)
}

handleObject(user)

const myNewArray = [100, 40, 500]

function returnsecvalue(getArray) {
    return getArray[2]
}

// console.log(returnsecvalue(myNewArray));




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  immediately invoked function expression (IIFE)
// IIFE  used because global scope accurs a problem sometime so IIFE reduce the global polution
(function chai (){
    //  (it is a named (iife)
    console.log(`DB CONNECTED`)
}) ();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})(`vaghela`)
