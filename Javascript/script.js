//imprimir todas las posiciones de un array numerico
function recorrerArray(array) {
   
    if (array.length == 0) {
        return array;
    }
     //code goes here
    for (let i = 0; i < array.length ; i++){
        console.log(array[i]);
                
    }

}

let array = [1, 2, 3, 4];
recorrerArray(array)

//Recorrer un array y devolver un array con los numeros pares

function numParesArray(arr) {
    let i = 0;
    let arrayAux = []; //Array donde guardamos los numeros pares

    if (arr.length == 0) { //valimos si el array tiene DATOS
        return arr //Devolvemos un array vacio
    }

    while (i < arr.length) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
            arrayAux.push(arr[i]);
            
        }
        
        

        i++
    }
    return arrayAux
}
let arr = [1, 2, 3, 4,5,6,7,8,9,10];

console.log(numParesArray(arr));
 