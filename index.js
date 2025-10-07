//document.getElementById("count-el").innerText=5  

let saveEl = document.getElementById("save-el")
let counter = document.getElementById("count-el")
console.log(counter)
let count = 0

//console.log(count)

function increment() {
    count = count + 1
    counter.innerText = count
    console.log(count)
} 

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count)
}
