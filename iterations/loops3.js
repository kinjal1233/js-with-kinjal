  
//    for of   //

// ["","",""] string inside array
// [{},{},{}] object inside array

const A = [1, 2, 3, 4, 5]
 for (const num of A) {
    // console.log(num);
 }

const greeting = "hello world!"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`)
}



//  maps
//  store only unique values

const map = new Map()
map.set('IN', "india")
map.set('JP', "japan")
map.set('US', "amarica")

// console.log(map);


/*  when we use key in  map for of loop they give results in array form
if we need a value then write a key in a square bracket . [key]  */


// for (const key of map) {
//      console.log(key);
// }

for (const [key, value] of map) {
    // console.log(key, ':', value);
}

const myObject = { 
    'game1' : 'NFS',
    'game2' : 'spiderman'
}
//  for (const [key, value] of myObject) {
//     console.log(key, ':', value);
//  }