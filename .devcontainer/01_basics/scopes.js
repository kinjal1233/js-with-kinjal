 
 let a = 300
 
 if(true) {
 
 let a = 10
 const b = 20
//  console.log("INNER", a)
 }
//  console.log(a);
//  console.log(b);


// ++++++++++++++++++++ nested scope ++++++++++++++++++++++++++++++++++++++++++++


function one(){
    const username = "kinjal"

    function two(){
        const website = "youtube"
        // console.log(username);
        // console.log(website);
    }
    // console.log(website);

    // two()
}

// one()


if(true){
    const username = "kd vaghela"
    if (username ==="kd vaghela") {
const website = " youtube"
// console.log(username + website);
    } 
}



// +++++++++++++++++++++ intresting +++++++++++++++++++++++++


function addone (num) {
    return num + 1
}

console.log(addone(5))