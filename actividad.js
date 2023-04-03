alert("estas es una pagina para saber cuanto es tu presupuesto mensual");
const imconpleto = ("");
let nombre = prompt("cual es tu Nombre?");
console.log("el nombre de usuario es " + nombre)

while (nombre == imconpleto) {
    alert("no puedes seguir si no completa este espacio");
    nombre = prompt("cual es tu Nombre?");
}

let apellido = prompt("Cual es tu apellido?");
console.log("El apellido de usuario es " + apellido);

while (apellido == imconpleto) {
    alert("no puedes seguir si no completa este espacio");
    apellido = prompt("cual es tu apellido?");
}

let edad = prompt("cual es tu edad?");
if (edad >= 18) {
    console.log("la edad de usuario es " + edad);
} else {
    alert("No cumples con la edad minima, por favor vuelve con un adulto");
}

while (edad == imconpleto) {
    alert("no puedes seguir si no completa este espacio");
    edad = prompt("cual es tu edad?");
}

let sueldo = prompt("cual es tu sueldo?")
console.log("el sueldo es de " + sueldo)

let otrosingresos = prompt("otros ingreso aparte de los preguntado anteriormente?")
console.log("otros ingreso que tiene el usuario son de " + otrosingresos);

let alquiler = prompt("cuanto cuesta tu alquiler?")
console.log("el alquiler es de " + alquiler);

let servicios = prompt("cuanto pagas por servicios por ej agua,luz,internet,etc?")
console.log("paga por los servicios " + servicios)

let otrosgastos = prompt("otros gastos aparte de los preguntado anteriormente?")
console.log("otros gastos que tiene el usuario son de " + otrosgastos);

const totalIngresos = sueldo + otrosingresos;
const totalgastos = alquiler + servicios + otrosgastos;
const presupuesto = totalIngresos - totalgastos;
 
console.log("tu presupuesto es de " + presupuesto)






