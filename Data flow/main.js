const posts = [
  {
    name: "adir",
    text: "i love you"
  },
  {
    name: "yoni",
    text: "good luck"
  },
  {
    name: "dor",
    text: "happy birthday" 
  }
]

const render = function(){
  for (let post of posts){
    $("#posts").append($(`<div class="post"> ${post.name}: ${post.text}</div>`))
  }
}
render()

$("button").on("click", function(){
  const $name = $("#name")
  const $text = $("#text")

  const post = {name : $name.val(), text : $text.val()}

  posts.push(post)

  $("#posts").empty()
  render()

  $name.val("")
  $text.val("")

})
