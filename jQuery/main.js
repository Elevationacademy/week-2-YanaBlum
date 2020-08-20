
// $("h1").css("color", "blue")
// $(".red-div").css("color", "red")
// $("li:first-child").css("color", "green")
// $("li:last-child").css("color", "pink")
// $("#brown-div").css("color", "brown")



// $("#b1").addClass("box")
// $("#b2").addClass("box")


// $('#my-input').val("Terabyte")


// const color = $("div").data().color  
// console.log(color) //prints #2980b9


// const data = $("div").data()
// console.log("Item with barcode " + data.barcode + " will expire on " + data.expirationdate) //notice how we use expirationdate, even though in the HTML it's expirationDate


// $('button').on('click', function () {
//   alert('clicked!')
// })


// $("#blue").hover(function () {
//   $("#blue").css("background-color", "blue")
// })



// $("button").on("click", function () {
//   alert($("#my-input").val())
// })


// $(".box").hover(function(){
//   $(this).css("background-color", "blue")
// })



// const aDynamicDiv = "<div class='mine'>Oh yes</div>"
// const elem = $(aDynamicDiv)
// console.log(elem)
// $("body").append(elem)


// $('.fruits').append('<p class="red">Raspberry</p>')
// $('.fruits').append('<p class="brown">Kiwi</p>')


// const text = "Banana"
// const item = $(`<div class=fruit>${text}</div>`)

// console.log(item) //the same


// $(".feedme").on("click", function(){
//   let divCopy = `<div class=feedme> ${$(this).text()} </div>`
  
//   $("body").append(divCopy)
// })


// // Notice the two dollar signs:


// // 1. The first is for the template literal - this allows us to combine text and variables easily
// // 2. The second is our normal jQuery function that converts this into a jQuery object




// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for(let name of names){
//   $("body").append(`<div>${name}</div>`)
// }



// const names = [
//   { first: "Alex", last: "Johnson" },
//   { first: "Byron", last: "Loveall" },
//   { first: "Cassandra", last: "Wuthers" },
//   { first: "Deandre", last: "Rahm" },
//   { first: "Ellena", last: "Freeman" }
// ]

// for (let name of names) {
//   $("body").append(`<div class=human>${name.first} - ${name.last}</div>`);
// }



//  $("#be-removed").hover(function(){
//   $(this).remove()
// })


// $("button").on("click", function(){
//   $("#blogs").append("<div class='blog'>Cool blog</div>")
// })

// $("#blogs").on("click", ".blog", function(){
//   $(".blog").text("blargh") 
// })

// $("#blogs").on("click", ".blog", function(){
//   $(this).text("uncool blog") 
// })

// const addDiv = function() {
//   $("body").append("<div class=box></div>")
// };

// $("button").on("click", function() {
//   addDiv()
// });

// $("body").on("click", ".box", function() {
//   alert("hi")
// });



//exrec 1 + 2

$("body").append(`<input type="text" id="my-input" placeholder="Humen name"></input>`)
$("body").append(`<button>Add Humen</button>`)

$("button").on("click", function(){
  $("ul").append(`<li>${$("input").val()}</li>`)
  $("input").val("")
});

$("#namesList").on("click", "li", function(){
  $(this).remove()
});


