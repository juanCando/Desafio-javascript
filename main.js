// variables Globales --------------------------------------------------------------------------------------------------------
let nombre
let nombredestacado
let nombredestacado2
let sum = 0;
let max1 = 0;
let max2 = 0;
let cant = 0;
let promerdio1 = 0;
let promerdio2 = 0;
let promerdio3 = 0;
// variables Globales --------------------------------------------------------------------------------------------------------


// funciones -----------------------------------------------------------------------------------------------------------------
function mejoresAlumnos (sum){
    if (max1 < sum){
        max2 = max1;
        max1 = sum;
        nombredestacado2 = nombredestacado;
        nombredestacado = nombre;
    }else if (max2 < sum){
        max2 = sum;
        nombredestacado2 = nombre;
    }
    sum = 0
}



function Notas (){
    let nota = 0;  
    for (let i = 1 ; i <= 5; i++){
        nota = parseInt(prompt("ingrese todas las nota del alumno que tubo durante el año (-1 para salir). nota numero = "+ i ));
        if (nota == -1){
            break
        }
        if ((nota > 10) || (nota <= 0)){
            alert ("ERROR numero invalido, vuelve a ingresar la nota")
            i = i - 1;
            nota = nota - nota
        }
        sum = sum + nota;
        if ((nota >= 1) && (nota <= 10)){
            promedioDeNotas (nota)
        }
    }
}

function promedioDeNotas (nota){
    if ((nota >= 8) && (nota <= 10)){
        promerdio1 = promerdio1 + nota
        alert("esta nota es 8 y 10" + nota)
    }else if ((nota >= 5) && ( nota <= 7)){
        promerdio2 = promerdio2 + nota
        alert("esta nota es 5 y 7" + nota)
    }else {
        promerdio3 = promerdio3 + nota
        alert("esta nota es 1 y 4" + nota)
    }
}


// funciones -----------------------------------------------------------------------------------------------------------------

// programa principal --------------------------------------------------------------------------------------------------------
nombre = prompt("ingrese el nombre del alumno. *ESC para salir");
while (nombre != "ESC"){
    Notas ()
    mejoresAlumnos (sum)
    nombre = prompt("ingrese el nombre del alumno. *ESC para salir");
}
alert("GUARDADO CON EXITO")
console.log(`el primer alumno con mejores nota es: ${nombredestacado} con un promedio de ${max1/5}`)
console.log(`el segundo alumno con mejores nota es: ${nombredestacado2} con un promedio de ${max2/5}`)
console.log(`promedio entre las notas 8 y 10 es: ${promerdio1/5}`)
console.log(`promedio entre las notas 5 y 7 es: ${promerdio2/5}`)
console.log(`promedio entre las notas 1 y 4 es: ${promerdio3/5}`)

