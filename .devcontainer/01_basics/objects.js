
// object literals


 const Jsuser =  {
    name: "kinjal",
    age: 19,
     location: "Ahmedabad",
     isLoggedIn:false,
     lastLoggedIn:["monday", "tuesday"]
 }

//  //two types to run the objects
// console.log(Jsuser.location)

 // console.log( Jsuser["location"])

 Jsuser.location = "rajkot"
 // Object.freeze(Jsuser)

 Jsuser.location = "surat"
// // console.log(Jsuser);

 
 const mysym = Symbol("key1")  //symbol syntax
 const Jcuser =  {
     [mysym]: "mykey1"
 }
 // console.log(typeof Jcuser[mysym])




 Jsuser.greeting = function(){
// console.log("hello viewers");
 }


Jsuser.greetingTwo = function(){
//     console.log(`hello viewer ${this.name}`);
    }
    
//     console.log(Jsuser.greeting());
//     console.log(Jsuser.greetingTwo());


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++ singleton ++ //
 // one type of onbject which is always used in constructor
// ex..( Object.create )

 

 tinderUser = {}                     
tinderUser.id = "123abc"
tinderUser.name = "kinjal"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
email: "some@gmail.com",
fullName: {
    userFullName: {
        firstname: "kinjal",
        lastname:"vaghela"
    }
}
}

// console.log(regularUser.fullName.userFullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}        

// const obj3 ={obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const user = [
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:1,
        email: "a@gmail.com"
    },
    {
        id:1,
        email: "a@gmail.com"
    },
]

user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




// destructuring
const course = {
    courseName : "is in hindi",
    price: "666",
    courseInstructor: "hitesh"
}

const {courseInstructor: ins} = course
console.log(ins);

