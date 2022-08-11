
const baseDeDatos = []
let nuevoAlumno
function capturar(){

    class alumnos {
        constructor(nombre,legajo,matematicas, CienciasSociales, EticaYCiudadanía){
            this.nombre = nombre
            this.legajo = legajo
            this.matematicas = matematicas
            this.CienciasSociales = CienciasSociales
            this.EticaYCiudadanía = EticaYCiudadanía
        }
    }
        
    const nombre = document.getElementById("nombre").value
    const legajo = document.getElementById("legajo").value
    const matematicas = document.getElementById("matematicas").value
    const CienciasSociales = document.getElementById("cienciasSociales").value
    const EticaYCiudadanía = document.getElementById("eticayCiudadania").value
    // const btnGuardar = document.getElementById("guardar")
    nuevoAlumno = new alumnos (nombre,legajo,matematicas,CienciasSociales,EticaYCiudadanía)
    agregar() 
}

function agregar (){
    baseDeDatos.push(nuevoAlumno)
    console.log(baseDeDatos)
    document.getElementById("tabla").innerHTML +=`<tbody><td>${nuevoAlumno.nombre}</td><td>${nuevoAlumno.legajo}</td><td>${nuevoAlumno.matematicas}</td><td>${nuevoAlumno.CienciasSociales}</td><td>${nuevoAlumno.EticaYCiudadanía}</td></tbody>`
}
