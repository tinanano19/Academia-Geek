let valorH = 2500;
let horas;
let total = 0;

alert('Hola! Bienvenido a Parqueo S.A, queremos informarle que el valor del parqueadero x hora es de $2.500 ( las fracciones de hora se toman como completas)')

horas = prompt('Ingrese el numero de horas que estuvo')

total = Math.ceil(horas) * valorH;

document.write(`El valor total a pagar es de $${total}`)

