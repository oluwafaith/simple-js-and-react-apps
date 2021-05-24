// document.getElementById("count").innerText = 5
let count = 0;
let countId = document.getElementById("count")
let saveId = document.getElementById("saveEl")

    
function increment() {   
    count += 1
    return countId.textContent = count ;
}

function save() {
    let elementsaved = count + " " + "-";
    saveId.textContent += elementsaved
    countId.textContent = 0 
    count =0  
}