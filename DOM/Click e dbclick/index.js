let button = document.querySelector("#btn")
console.log(button)

button.addEventListener("click", function(){
    let title = document.querySelector("#title")
    title.style.color = "pink"
    button.style.color = "red"
    button.style.backgroundColor = "green"
})
