
// let suma = 10 + 15; // 15
// let producto = 20 * 2; // 40



// if (suma > 20) {
//     console.log("La suma es mayor que 20");
//   }
//   else {
//     console.log("La suma es menor o igual a 20");
//   }

//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

//   let i = 0;
// while (i < 7) {
//   console.log(i);
//   i++;
// }


// CLASE 1 //

// 🚀
// let nombreUno = 'Enzo';
// let booleanVerdadero = true;
// let booleanFalso = false;
// let numero = 10;

// console.log(nombreUno, booleanFalso, booleanVerdadero, numero);

// nombreUno = 'Juan';
// console.log(nombreUno);

// const anio = 2025;

// console.log(typeof anio, typeof nombreUno);

// 🚀
// let stringDiez= '10'
// let n1 = 10 
// let n2 = 20 
// const PI= 3.14
// let resultado = n2 * PI

// console.log(resultado);

// 🚀
// let pregunta = prompt('Decime tu nombre')
// let edad = parseInt(prompt('Decime tu edad'))
// let edadDos = Number(prompt('Decime tu edad'))


// console.log(pregunta);
// console.log(typeof edad);

// 🚀
// let pregunta = prompt('Decime tu nombre')

// let n1 = 100 
// let n2 = 200
// let resultado = n1 + n2
// alert(resultado)

// let pregunta = '¿Confirma la operación?'

// confirm(pregunta)


// EJEMPLO 1 - CONDICIONALES 🚀

// let edad = 36;

// if(edad < 18){
//     console.log('Usted es menor de edad');
// }
// if(edad === 35 ){
//     console.log('Usted es mayor de edad');
// }
// else{
//     console.log('No sabemos su edad');
// }


// let temperatura = 20;

// if(temperatura > 28){
//     console.log('Parece que volvió el verano');
// }
// else if ( temperatura < 15 ){
//     console.log('Dia fresco');
// }
// else{
//     console.log('No sabemo la temp.');
// }


// let profesor = '';

// if (profesor === 'Juan'){
//     console.log('Se cumple la cond.');
// }
// else{
//     alert('Ese no es su nombre');
//     let nombre = prompt('Cual es su nombre')
//     alert(`Su nombre es ${nombre}`)
// }


// EJEMPLO 2 FOR 🚀
//      DESDE - HASTA - ACT.
// for (let i = 1; i < 5; i++) {
//    alert(i);
// }


// const cantPacientes = Number(prompt('Cuantos pacientes desea registrar?'));

// for (let i = 1; i <= cantPacientes; i++) {
//     const nombrePaciente = prompt(`Nombre paciente número ${i}`)
//     const edad = Number(prompt(`Edad del paciente número ${i}`))    
//     const obraSocial = prompt(`Obra social del paciente ${i}`)

//     console.log(`Paciente ${nombrePaciente}, de ${edad} años (${obraSocial}), registrado`);

// }


// EJEMPLO 3 WHILE 🚀

// let contador = 0

// while (contador <= 5) {

//     alert(contador);
//     contador++
    
// }

// let calificacion = 75;

// if (calificacion >= 90) {
//     console.log("Excelente");
// } else if (calificacion >= 70) {
//     console.log("Bueno");
// } else {
//     console.log("Necesitas estudiar más");
// }


// let edad = 20;
// let acceso = (edad >= 18) && (edad <= 30);
// console.log(acceso); // true si la edad está entre 18 y 30
// let temperatura = 35;
// let advertencia = (temperatura < 0) || (temperatura > 32);
// console.log(advertencia); // true si la temperatura es menor que 0 o mayor que 32






// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         continue; // Omite los números pares
//     }
//     console.log(i); // Imprime los números impares entre 0 y 9
// }

// let nombreIngresado   = prompt("Ingresar nombre");
// let apellidoIngresado = prompt("Ingresar apellido");

// // if((nombreIngresado !="") && (apellidoIngresado !="")) {
// //     alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado); 
// // } else {
// //     alert("Error: Ingresar nombre y apellido");
// // }





// CLASE 3

// //Declaración de variable para guardar el resultado de la suma
// let resultado = 0;
// //Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero
// }
// //Función que muestra resultado por consola
// function mostrar(mensaje) {
//     console.log(mensaje)
// }
// //Llamamos primero a sumar y luego a mostrar
// sumar(6, 3);
// mostrar(resultado); 
