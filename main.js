let nombre = prompt("ingrese el nombre del alumno. *ESC para salir");
let nota = 0;
let nombredestacado
let nombredestacado2
let sum = 0;
let max1 = 0;
let max2 = 0;


while (nombre != "ESC"){
    for (let i = 1 ; i <= 5; i++){
        nota = parseInt(prompt("ingrese todas las nota del alumno que tubo durante el año. nota numero = "+ i ));
        if ((nota > 10) || (nota <= 0)){
            alert ("ERROR numero invalido, vuelve a poner el nombre")
            break
        }
        sum = sum + nota;
    }
    if (max1 < sum){
        max2 = max1;
        max1 = sum;
        nombredestacado2 = nombredestacado;
        nombredestacado = nombre;
    }else if (max2 < sum)
        max2 = sum;
        nombredestacado2 = nombre;

    nombre = prompt("ingrese el nombre del alumno. *ESC para salir");
}
alert("GUARDADO CON EXITO")
console.log("el primer alumno con mejores nota es: " + nombredestacado + " con un promedio de " + max1/5)
console.log("el segundo alumno con mejores nota es: " + nombredestacado2 + "con un promedio  de " + max2/5)