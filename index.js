console.log("Hola Mundo")

/*
    1 -> Tipos de variables:
        var
        let
        const 
*/

var name1 = 'Dana'
let name2 = 'Edwin'

function sayName() {
    name1 = 'Hill'
    name2 = 'Naomi'

    console.log(name2)  //Naomi
}

console.log('nombre1 ', name1)  //Hill
console.log('nombre2 ', name2)  //Edwin

sayName()