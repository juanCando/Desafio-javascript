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
        
  	return sum / this.asignaturas.length;
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

let legajo;
let nombre = prompt('Ingrese el nombre del alumno (o presione ESC para finalizar)');
while (nombre) {
  legajo = prompt('Ingrese el legajo del alumno');
  let asignaturas = [];
  
	nombresAsignaturas.forEach((nombre) => {
  	let calificacion = prompt(`Ingrese la calificación obtenida para ${nombre}`);
    if (typeof calificacion !== 'number' && (calificacion < 0 || calificacion > 10)) {
    	alert('Error en la calificacion');
      throw '';
    }
    
    const asignatura = new Asignatura(nombre, calificacion);
    asignaturas.push(asignatura);
  });

	alumnos.push(new Alumno(nombre, legajo, asignaturas));
  
	nombre = prompt('Ingrese el nombre del alumno (o presione ESC para finalizar)');
};


alumnos.forEach((alumno) => {
  alert(`Para el alumno ${alumno.getNombre()}, se tienen las siguientes notas: \n`);
	alumno.getAsignaturas().forEach((asignatura) => {
    alert(`${asignatura.getNombre()} - nota: ${asignatura.getCalificacion()}`);
  })
	alert(`El alumno ${alumno.getNombre()} tuvo un promedio de ${alumno.getPromedio()}`)
});


 
