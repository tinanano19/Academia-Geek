let nHombre, nMujer;
let totalE = 0;
let percH, percM;

nHombre = Number(prompt('Número de estudiantes hombres'))
nMujer = Number(prompt('Número de estudiantes mujeres'))

totalE = Number(nHombre + nMujer)

percM = (nMujer/totalE) * 100;
percH = (nHombre/totalE) * 100;

document.write(`Total estudiantes: ${totalE} Porcentaje hombres: ${percH.toFixed(2)}% Porcentaje mujeres: ${percM.toFixed(2)}%`)