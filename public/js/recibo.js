import {sumar, restar} from "./envio.js";



let resultadoSuma = sumar(5,3);

console.log(resultadoSuma);

let resultadoResta = restar(10,4);

console.log(resultadoResta);





let listaNumeros = [1,2,3,4];


let resultadoMultiplicados=listaNumeros.map(numero => numero*2);

console.log(resultadoMultiplicados);



const personas =[
    {nombre: "Barry", edad: 30},
    {nombre: "Maria", edad: 25},
    {nombre: "Juan", edad: 35}
]


let nombresMayuscula = personas.map(persona => persona.nombre.toUpperCase());

console.log(nombresMayuscula);


let listaNumerosLindos = [1,2,3,4,5];

const numerosMayores = listaNumerosLindos.filter(numero => numero > 3);

console.log(numerosMayores);




const usuarios =[
    {nombre: "Barry", estado: true},
    {nombre: "Maria", estado: false},
    {nombre: "Juan", estado: true}
]


let usuariosActivos =usuarios.filter(usuario =>usuario.estado)

console.log(usuariosActivos);





const totalSuma = listaNumerosLindos.reduce((acum,numero)=> acum + numero,0);

console.log(totalSuma);

 



const dineroDolares =[20,100,30,10]


const dineroEnColones= dineroDolares.map(monto => monto * 500)

console.log(dineroEnColones);


//Datos que provienen de una base de datos 
const usuariosSistema =[
    {nombre: "Barry", password: "1234"},
    {nombre: "Maria", password: "123456"},
    {nombre: "Juan", password: "12345678"}
]

//datos que el usuario ingresa en un formulario
const contra="1234"
const usuarioIngresado = "Barry"


const usuarioEncontrado = usuariosSistema.filter(usuario=>usuario.nombre==usuarioIngresado && usuario.password==contra)

console.log(usuarioEncontrado);



//Con Operador ternario
//Dado el arreglo [5, 3, 8, 2],
//Usa reduce para obtener el número mayor del arreglo.

const numeros = [5, 3, 8, 2];

const mayor=numeros.reduce((mayorActual,numeroActual)=> mayorActual>numeroActual ? mayorActual:numeroActual)

console.log(mayor);





