var number = prompt("Voer getal in");
var array = []
var text = "";

for(i=0;i<=number;i++){
    array[i] = i
}

document.getElementById('array').innerHTML = "Array : " + array

for(i=0;i<=number;i++){
    text = "" + text + array[i]
    var element = document.createElement('p')
    element.innerHTML = text
    document.getElementById('piramide').appendChild(element)
}