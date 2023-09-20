//SWITCH
//Evalua casos y en base a las condiciones arroja un resultado

//TEMPLATE LITERALS backticks `${variable}`


/* let almuerzo = prompt("Que deseas almorzar")

switch (almuerzo) {
    case "hamburguesa":
        console.log(`vas a almorzar ${almuerzo} el monto total es de 1500`)
        break
    case "pizza":
        console.log(`vas a almorzar ${almuerzo} el monnto de tu compra es de 2000`)
        break
    case "lomo":
        console.log(`vas a almorzar ${almuerzo} el monto de tu compra es de 3000`)
        break
    default:
        console.log(`vas a almorzar ${almuerzo}`)
        break
} */

/* if (condicion) {

} else if (otracondicion) {

} else if (otracondicion) {

} else {

} */

/* const valor = 200
const burguer = "Especial"

const nombre = "Coder"
const apellido = "House"
const edad = 25


alert(`Bienvenido al curso de Js, ${nombre} ${apellido}, veo que tienes ${edad} años`) */
// let pelicula = prompt(``)

/* let pelicula = prompt(`Elija su pelicula favorita:
1: Hasta el hombre
2: La monja
3: Wall E
`)

switch (pelicula) {
    case "1":
        console.log("Hasta el último hombre")
        break;
    case "2":
        console.log("La monja")
        break
    default:
        console.log("Wall E")
        break;
} */

//WHILE
// while(condicion){
//ejecutar un código -> "cuerpo del bucle"
// }

// let i = 5

//i + 1

/* while (i <= 20) {
    console.log(i)
    i++
} */

/* let entrada = prompt("Ingrese un texto o ESC para interrumpir")

let texto = ""

while (entrada != "ESC" && entrada != "esc") {
    texto += entrada + " "
    entrada = prompt("Ingrese un texto o ESC para interrumpir")
}

alert(texto) */


//DO WHILE

/* do{
 // Cuerpo de bucle
}while(condicion) */
/* ++ operador de incremento
-- operador de decremento */
/* let y = 0

do {
    console.log(y)
    y++
} while (y <= 10); */

//FOR

/* 
for( desde;hasta ;actualizacion )


*/

/* for (let i = 0; i <= 10; i++) {
    console.log(`El valor de la variable es: ${i}`)
} */

//tabla de multiplicar

let numero = parseInt(prompt("Ingrese un numero"))

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`)
}

/* console.log(3x1)
console.log(3x2) */