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

/*
    2 -> Métodos de string Parte2.
*/

//str.match(regExp)
findCharacter = phrase.match(/Hola/)
console.log('match', findCharacter)

//str.slice(start, endNotIncluded)
let newPhrase = phrase.slice(7, 12)
console.log(newPhrase)

//str.substring(start, endNotIncluded)
newPhrase = phrase.substring(1, 5)
console.log(newPhrase)

//str.substr(start, length)
newPhrase = phrase.substr(1, 5)
console.log(newPhrase)

//str1.startsWidth(str2)
let startWidth = phrase.startsWith('H')
console.log(startWidth)

//str1.replace(regExpr, str2)
newPhrase = phrase.replace(/o/g, 'e')
console.log(newPhrase)

//str.trim()
console.log(phrase.length)
newPhrase = phrase.trim()
console.log(newPhrase)
console.log(newPhrase.length)

//str.charAt(num)
let positionCharacter = phrase.charAt(6)
console.log(positionCharacter)

//str[]
positionCharacter = phrase[8]
console.log(positionCharacter)

//str.charCodeAt(num)
positionCharacter = phrase.charCodeAt(6)
console.log(positionCharacter)

//String.fromCharCode(num)
let character = String.fromCharCode(97)
console.log(character)

//str1.split(str2)
let newArray = phrase.split('')
console.log(newArray)

//str1.includes(str2, num)
let hasCharacter = phrase.includes('Hola', 9)
console.log(hasCharacter)

//str1.endsWith(str2)
hasCharacter = phrase.endsWith('s ')
console.log(hasCharacter)

//str.repeat(num)
console.log(phrase.repeat(20))

//num.toString()
let number = 2
number = number.toString()
console.log(typeof (number))