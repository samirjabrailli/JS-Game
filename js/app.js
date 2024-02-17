const cedvel = document.getElementById("cedvel")
let kod = ""
let x = 1
let redclick = 0

let arr = []

for (let i = 1; i <= 16; i++) {
    arr.push(i)
}
console.log(arr);

for (let i = 0; i < 4; i++) {
    kod += "<tr>"
    for (let j = 0; j < 4; j++) {
        let key = random(0, arr.length - 1)
        kod += `<td onclick="goster(this)" >${arr[key]}</td>`
        arr.splice(key, 1)
    }
    kod += "</tr>"
}
cedvel.innerHTML = kod

function goster(element) {
    console.log(element);
    if (element.innerHTML == x) {
        element.style.background = "#AAA"
        x++
    }
    else {
        
        element.style.background = "red"
        redclick++

        if (redclick == 3) {
            alert("Oyun bitdi")
            cedvel.innerHTML  = ''
        }

        
      
        
    }
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}