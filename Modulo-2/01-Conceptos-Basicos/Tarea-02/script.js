let sueldo = 0;
let Nombre, horas, valorH;


Nombre = prompt("Ingrese su nombre")
horas = prompt("Ingrese sus horas trabajadas")
valorH = prompt("Ingrese el valor/h")

sueldo= horas * valorH;

document.write(`Hola, ${Nombre}, su sueldo es de $${sueldo}.`)