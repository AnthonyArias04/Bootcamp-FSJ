/*
EJERCICIO:
REALIZA UNA FUNCION QUE RECIBA UN ARRAY NUMERICO Y RETORNE COMPLETAMENTE NUEVO 
SOLAMENTE CON LOS NUMEROS QUE SEAN MULTIPLOS DE 3 Y QUE LA SUMA DE TODOS SUS NUMEROS DE MENOS DE 100

*/







function numerosDe3(array){
    let ramdon = []
    let suma = 0
    for(i=0;i<array.length;i++){
        let num = array[i]
       
        if (num % 3 ==0){
            ramdon.push(num)
            console.log(ramdon);
            
            
        }
        if(suma+num>100){
            ramdon.pop(num)
            console.log(ramdon);
            
        }
        }
    }
   

let array = [31, 7, 17, 8, 18, 14, 28, 1, 9, 3, 48, 52, 55, 79, 88, 63]
numerosDe3(array)