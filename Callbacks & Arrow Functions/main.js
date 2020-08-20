// let users = []

// const getData = function () {
//     users = [{ name: "Rick" }, { name: "Morty" }]
//     console.log("Got users")
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()






// let users = []

// const getData = function () {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display users")
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData()
// displayData()





// const first = function () {
//   setTimeout(function () {
//       console.log("should be first")
//   }, 3000)
// }

// const second = function () {
//   console.log("should be second")
// }

// first()
// second()






// const first = function (callback) { //receive the function as a parameter
//   setTimeout(function () {
//       console.log("should be first")
//       callback() //this is the `second` function being invoked
//   }, 3000)
// }

// const second = function () {
//   console.log("should be second")
// }

// first(second) //pass the second function to the first, as an argument




//spot check1 2

// let users = []

// const getData = function (display) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         display()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)
// // displayData()


//spot check3

// const timer = function(){
//   console.log(new Date())
// }

//  setInterval(timer, 1000)

// the same as:

//  setInterval(() => {
//    console.log (new Date())
//  }, 1000);



// const greet = name => console.log("Hello there, " + name)

// greet("Jolene") //prints "Hello there, Jolene"




//spot check4

// const square = number => console.log (number* number)
// square(4)


// const getHypotenuse = (a, b) => {
//   const aSquared = a * a
//   const bSquared = b * b
//   const cSquared = aSquared + bSquared
//   return Math.sqrt(cSquared)
// }

// const hypoteneuese = getHypotenuse(3, 4) 
// console.log(hypoteneuese ) //prints 5


//spot check 5

// const getFormalTitle = (title, name) => title + " " + name


// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"


// const suspenseBuilder = {
//   name: "El Mysterio",
//   displayName: function () {

//       console.log("You are going to see the name in 3 seconds...")

//       setTimeout(() => { //this is the change
//           ﻿console.log("The name is: " + this.name)
//       }, 3000)

//   }
// }

// suspenseBuilder.displayName()



//exrec 1

// const push = function () {
//   console.log("pushing it!")
// }

// const pull = function () {
//   console.log("pulling it!")
// }

// const pushPull = func => func()

// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"

//exrec 2
// const time = new Date()

// const returnTime = function (time) {
//   alert('The current time is: ' + time)
// }

// const getTime = function(){
//   returnTime(time)
// }

// getTime(returnTime)


//exrec 3

// const displayData = function (alertDataFunc, logDataFunc, data) {
//   alertDataFunc(data);
//   logDataFunc(data);
// };

// const logData = function(x){
// console.log(x)
// }

// displayData(alert, logData, "I like to party")


//exrec 4 

// const sum = Number => console.log (Number + Number + Number)

// sum(3)


//exrec 5 

// const capitalize = name => console.log (name[0].toUpperCase() + name.slice(1).toLowerCase())

// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia


