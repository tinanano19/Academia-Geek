let vehiculo, horas, valorHora, descuento, valor, valorSin, valorTotal;

document.getElementById("cont-val").style.display = "none";

function calcularPrecio() {
  let vehiculo = document.getElementById("tipo").value;
  let horas = Number(document.getElementById("horas").value);

  valorSin = Servicio(horas);
  descuento = Descuento(vehiculo, valorSin);
  valorTotal = valorSin - descuento;

  document.getElementById("cont-val").style.display = "block";
  document.getElementById("Valor").innerHTML = "Subtotal: $"+ valorSin;
  document.getElementById("Descuento").innerHTML = "Descuento: $"+ descuento;
  document.getElementById("Total").innerHTML = "Total: $"+ valorTotal;
}

function Servicio(horas) {
  if (horas > 0 && horas <= 2) {
    valorHora = 5000;
    valor = valorHora * horas;
  } else if (horas > 2 && horas <= 5) {
    valorHora = 4000;
    valor = 2 * 5000 + (horas - 2) * valorHora;
  } else if (horas > 5 && horas <= 10) {
    valorHora = 3000;
    valor = 2 * 5000 + 3 * 4000 + (horas - 5) * valorHora;
  } else if (horas > 10) {
    valorHora = 2000;
    valor = 2 * 5000 + 3 * 4000 + 5 * 3000 + (horas - 10) * valorHora;
  }
  return valor;
}

function Descuento(vehiculo, valorSin) {
  switch (vehiculo) {
    case "Carro":
      descuento = valorSin * 0.1;
      break;
    case "Moto":
      descuento = valorSin * 0.15;
      break;
    default:
      alert("Seleccione un vehiculo");
  }
  return descuento;
}
