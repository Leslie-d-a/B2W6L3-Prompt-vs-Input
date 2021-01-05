var array = []
var text = "";

function piramide(){
    var number = document.getElementById('input').value
    for(i=0;i<=number;i++){
        array[i] = i
    }
    document.getElementById('array').innerHTML = "Array : " + array

    for(i=0;i<=number;i++){
        text = "" + text + array[i]
        var element = document.createElement('p')
        element.innerHTML = text
        var div = document.getElementById('piramide')
        div.insertBefore(element, div.childNodes[0])
    }
}