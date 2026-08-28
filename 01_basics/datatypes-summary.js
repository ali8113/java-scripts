// Primitive

// 7 types: String , Number , Boolearn , null , undefined , Symbol , BigInt


const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23495569505895533n



// Reference (Non primitive)

// Array, Objects , Functions 


const heros = ["Alex" , "William" , "Khan"]

let myObj ={
    name:"Mickael",
    age : 24,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heroes);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ \\

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "Hello"

let anothername = myYoutubename
anothername = "World"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "@Google.com"

console.log(userOne.email);
console.log(userTwo.email);

