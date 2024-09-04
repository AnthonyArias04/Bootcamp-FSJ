console.log("HOLIWIS");


//Agarrar un elemento del DOM
let elementoDOM = document.getElementById('saludos');
console.log(elementoDOM);

//Propiedades mas utilizadas
console.log(elementoDOM.innerHTML);
console.log(elementoDOM.innerText);


elementoDOM.innerText = "Te cambie desde el JS"

elementoDOM.innerHTML = "<span>Te cambien otra vez XD</span>"