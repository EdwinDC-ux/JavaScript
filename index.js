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

/*
    Ejercicio 2:
    Programa que reciba una frase cualquiera y regrese la frase invertida respetando el lugar de los espacios.
    Input:  hola mundo
    Output: odnu maloh

    Input:  Saludar a todos
    Output: sodotar a dulaS
*/
var frase1 = 'hola mundo'
var frase2 = 'Saludar a todos'

console.log('Forma N° 1 de resolver ejercicio:')
var fraseArray = frase1.split(' ')
frase1 = frase1.replace(/ /g, '')
var fraseResultado = ''
var recorrido = 1
var j = 0
var verificador = fraseArray[0].length
for (var i = frase1.length - 1; i >= 0; i--) {
    fraseResultado += frase1[i];
    if (recorrido === verificador && i > 0) {
        fraseResultado += ' '
        j++;
        verificador += fraseArray[j].length
    }
    recorrido++
}
console.log(fraseResultado)

console.log('Forma N° 2 de resolver ejercicio:')
var fraseSinEspacios = frase2.replace(/ /g, '')
var fraseRevertida = fraseSinEspacios.split('').reverse().join("")
var fraseResultado = ''
for (let index = 0, index2 = 0; index < frase2.length; index++) {
    if (frase2[index] === ' ') {
        fraseResultado += ' '
    } else if (fraseRevertida[index2] != undefined) {
        fraseResultado += fraseRevertida[index2]
        index2++
    }
}
console.log(fraseResultado)

//Template literal
let phrase1 = ' hola '
let name = 'Dana'
let age = 24
console.log(`${phrase1} soy ${name} y tengo ${age} años`)

/*
    3 -> Métodos de Array
        Conjunto de datos, su posición empieza de cero a n, si declaramos un array como const podremos modificar sus elementos únicamnete haciendo uso del id o con el método push, pero no reemplazar el array cpompleto.
*/

let array = [17, 24, 15, 30, 18, 20]
let array2 = ["adios"]

//.concat(arr)
let newArr = array.concat(array2)
console.log(array)
console.log(newArr)

//.every(function => true|false) : verifica si todos los elementos pasan una prueba
let is = array.every(function (age) {
    return age >= 18
})
console.log(is)

//arr.fill(value,[start,end)) : llena los elementos dentro del rango con el valor estático
array.fill('hi', 1, 4)
console.log(array)

//.find(function)
let numeroMayor = array.find((age) => age >= 18)
console.log(numeroMayor)

//.findIndex(function)
let position = array.findIndex((age) => age >= 18)
console.log(position)

//.indexOf(value)
let item = array.indexOf(20)
console.log(item)

//.lastIndexOf(value)
item = array.lastIndexOf('hi')
console.log(item)

//.join(string)
array = ['Hola', 'soy', 'Dana']
let arrayToString = array.join(" ")
console.log(arrayToString)

//.reverse()
let numbersArray = [1, 2, 3, 4, 5]
console.log(numbersArray.reverse())

//.some(function) : verifica si alguno de los elementos cumple con la función y regresa true con uno que cumpla
array = [12, 2, 52, 1, 2]
position = array.some(age => age >= 18)
console.log(position)

//.shift() : Elimina primer elemento
let deletedItem = array.shift()
console.log(`Eliminando el primer elemento que es ${deletedItem} y ahora queda${array}`)

//.unshift(value) : agrega un elemento al inicio
let putItem = array.unshift(33)
console.log(`Agregando el primer elemento y ahora mi tamaño es ${putItem} y ahora queda ${array}`)

//.push(value)
numbersArray.push(4)
console.log(numbersArray)

//.pop()
deletedItem = array.pop()
console.log(deletedItem)

//.slice(start,end)
newArr = array.slice(1, 4)
console.log(newArr)

//.splice(start,itemsCount,newValue)
array.splice(2, 1, 20)
console.log(array)

//.includes(value)
let hasHola = array.includes('hola')
console.log(hasHola)

//.sort([function])
let alphabethArr = ['a', 'f', 'c', 'b', 'e', 'd']
alphabethArr.sort()
console.log(alphabethArr)
array.sort((a, b) => a - b)
console.log(array)

/*
    4 -> Funciones
*/

//callback function
function sayHello(greet = () => {
    console.log('hello')
}) {
    let hello = true
    hello ? greet() : null
}
sayHello()

//functions
function suma(num, num2) {
    return num + num2
}
console.log(suma(3, 4))

//arrow function
const suma1 = (num, num2) => num + num2
console.log(suma1(3, 4))

//examples
const printValue = value => console.log(value)
printValue('Hola a todos')

const printValue2 = value => {
    value = value.toUpperCase()
    console.log(value)
}
printValue2('Hola a todos')