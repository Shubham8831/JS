// Data Types
// (numbers, strings, booleans, NULL, undefined, objects)


// numbers
let num = 3 // automatic type number
let numb = 3.141 
console.log(num+numb) 

//strings
const first_name = "shubham "
const last_name = 'singh'
console.log(first_name+last_name)


//boolean - only true and false
// internally this are just 0 and 1
// 1 - true and 0 - false
let isloogedin = true


//null

let last_login_date = null

const last_login_time = null

// when we create varibale we use some space and when we do null


//undefined
let someting = undefined

// so the difference between null and undefined is null exist but does not have a value and undefined it does not exist


// objects
const person = {
    // we can keep properties of person
    fist_name:"shubham",
    last_name : "singh",
    age:24,
    isloggedin: false
}

console.log(person)
console.log(person.age)

// object has key value paires














//OPERATORS
// + - * / 

console.log(first_name + last_name) // this work as concatination

console.log("1" + 11) // 111 string + number = string
console.log("1" * 11) // 11 string * number = number
console.log('a' * 1) // Nan string * number = nan
console.log('a' + 1) // a1 string + number = string

console.log(typeof 1) // to find the type of the variable 
console.log(typeof('a' + 1))
console.log(typeof person)