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

/*
    2 -> Métodos de string Parte1.
*/

var phrase = " Hola a todos "

//str.toUpperCase()
let phraseUpper = phrase.toUpperCase()
console.log(phraseUpper)

//str.toLowerCase
let phraseLower = phraseUpper.toLowerCase()
console.log(phraseLower)

//str.length
let numberOfCharacters = phraseLower.length
console.log(numberOfCharacters)

//str1.concat(str2[,str3,...])
let stringConcat = phraseLower.concat(
    ' tengo ',
    numberOfCharacters,
    ' caracteres'
)
console.log(stringConcat)

//str1.indexOf(str2)
let findCharacter = phrase.indexOf('a')
console.log(findCharacter)

//str.search(regExpr)
findCharacter = phrase.search(/todo/)
console.log(findCharacter)

//str1.lastIndexOf(str2)
findCharacter = phrase.lastIndexOf('o')
console.log(findCharacter)

/*
    Ejercicio 1:
    Programa que reciba una cadena de caracteres y
    regrese el primer carácter que no se repite.
    Input: aadbbbc
    Output: d
*/
let cadena = 'aadbbbc'

for (let index = 0; index < cadena.length; index++) {
    if (cadena.indexOf(cadena[index]) == cadena.lastIndexOf(cadena[index])) {
        console.log(cadena[index])
        break
    }
}