

// ++++++++++++++++ array ++++++++++++++++ //

// declare array

// const myArr = [0, 9, 7, 5, 4, 6]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[10]);

//  array methods

// myArr.push(9)
// myArr.pop()

// const newArray = myArr.join()

// console.log(myArr);
// console.log(typeof newArray);




// ++++ slice. splice +++++ //

// console.log("a ", myArr);

// const myn1 = myArr.slice(1, 4)

// console.log(myn1);
// console.log("b ", myArr);



// const myn2 = myArr.splice(1, 4)
// console.log("c ", myArr);
// console.log(myn2);



const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "duperman", "batman"]
//  marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


 const all_new_heros = [...marvel_heros, ...dc_heros]

//  console.log(all_new_heros);

const another_array = [1, 2, 3,[ 4, 5, 6], 7, [7, 6,[5, 4]]]

const real_another_array =  another_array.flat(Infinity)

console.log(real_another_array);




console.log(Array.isArray("kinjal"))

console.log(Array.from("kinjal"))

console.log(Array.from({name:"kinjal"}))  // intresting 

