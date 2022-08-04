class Alumno {
	constructor(
  	nombre,
    legajo,
    asignaturas,
  ) {
  	this.nombre = nombre;
    this.legajo = legajo;
    this.asignaturas = asignaturas;
  }
  
  getNombre() {
  	return this.nombre;
  }
  
  getAsignaturas() {
  	return this.asignaturas;
  }
  
  getPromedio() {
    let sum = 0;
    
    this.asignaturas.forEach((asign) => {
    	sum = sum + asign.getCalificacion();
    })
        
  	let resultado = sum / this.asignaturas.length;
    return resultado.toFixed(2)

  }
}

class Asignatura {
	constructor(
  	nombre,
    calificacion,
  ) {        
		this.nombre = nombre;
    this.calificacion = calificacion;
  }
  
  getNombre() {
  	return this.nombre;
  }
  
  setNombre(nombre) {
  	this.nombre = nombre;
  }
  
  getCalificacion() {
  	return this.calificacion;
  }
  
  setCalificacion(calificacion) {
  	this.calificacion = calificacion;
  }
}

let alumnos = [];
const nombresAsignaturas = ['Matemáticas', "Ciencias Sociales", "Ética y Ciudadanía"];
const PromedioDeMaterias = [0,0,0]
let contador = 0

let legajo;
let nombre = prompt('Ingrese el nombre del alumno (o presione ESC para finalizar)');
while (nombre != "ESC") {
  legajo = prompt('Ingrese el legajo del alumno');
  let asignaturas = [];
  
	nombresAsignaturas.forEach((nombre) => {
  	let calificacion = parseInt(prompt(`Ingrese la calificación obtenida para ${nombre}`));
    if (calificacion !== 'number' && (calificacion < 0 || calificacion > 10)) {
    	alert('Error en la calificacion');
      throw '';
    }
    if (nombre === "Matemáticas"){
      PromedioDeMaterias[0] = PromedioDeMaterias[0] + calificacion
    }else if (nombre === "Ciencias Sociales"){
      PromedioDeMaterias[1] = PromedioDeMaterias[1] + calificacion
    }else{
      PromedioDeMaterias[2] = PromedioDeMaterias[2] + calificacion
    }
    contador++
    const asignatura = new Asignatura(nombre, calificacion);
    asignaturas.push(asignatura);
    console.log(PromedioDeMaterias)
  });

	alumnos.push(new Alumno(nombre, legajo, asignaturas));
  
	nombre = prompt('Ingrese el nombre del alumno (o presione ESC para finalizar)');
};


alumnos.forEach((alumno) => {
  console.log(`Para el alumno ${alumno.getNombre()}, se tienen las siguientes notas: \n`);
	alumno.getAsignaturas().forEach((asignatura) => {
    console.log(`${asignatura.getNombre()} - nota: ${asignatura.getCalificacion()}`);
  })
	console.log(`El alumno ${alumno.getNombre()} tuvo un promedio de ${alumno.getPromedio()}`)
});

console.log(`el promedio de matematicas con las notas generales de alumnos es ${PromedioDeMaterias[0]/contador.toFixed(2)}`)
console.log(`el promedio de Ciencias Sociales con las notas generales de alumnos es ${PromedioDeMaterias[1]/contador.toFixed(2)}`)
console.log(`el promedio de Ética y Ciudadanía con las notas generales de alumnos es ${PromedioDeMaterias[2]/contador.toFixed(2)}`)






