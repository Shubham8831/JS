// variables in javascripts ;  var, let and const
console.log("testing")



// var : it was only present in old js
var age = 24
console.log(age)

// in other languages we used : 
// data type  variable name = value this is called as stongly typed language ( we have to follow that data type throughout)
// BUT js is losely typed language the datatype are assigned dynamically

// drawback; 
age = "piyush"
console.log(age) // age did not gave us error as we changed it runtime
// this can create bugs

//don't start var with numbers, symbols, no hyphon in bw

// var =-> scope is global ; this does not happen with let or const
// can use this variable through out whole program, even in console
if (true){
     var age = 4
}
console.log(age)






// let


// if (true){
//      let agee = 4
// }
// console.log(agee) // this will give error as the scope of let is local scoped

// always use let








// const scope is local. value once assigned canot be chagned, also when initiallzed it should have a value cannot be left empty like let and var

const namew = "shubham"
namew = "pizza"
console.log(namew)


//const ab; // can't be undefined





// var | let | const - summary

// var - global
// re-assign
// acessed anywhere

// let - local
// re-assign
// access in block only

// const - local
// can't be re assigned
// access in block only
// mostly used const and then let