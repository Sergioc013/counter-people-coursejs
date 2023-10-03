let countEl = document.getElementById("count-el")
let counter = 0
let saveEl = document.getElementById("save-el")

function increment() {
    counter += 1
    countEl.innerText = counter
}

function save() {
    let entriesMessage = counter + " - "
    saveEl.textContent += entriesMessage
    counter = 0
    countEl.innerText = counter
}