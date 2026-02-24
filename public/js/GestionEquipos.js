
import { postEquipos,getEquipos,deleteEquipos,putEquipos,patchEquipos } from "../services/serviceEquipos.js";


const equipo = document.getElementById("equipo");
const paisCreacion = document.getElementById("paisCreacion");
const fechaCreacion = document.getElementById("fechaCreacion");
const btnAgregar = document.getElementById("btnAgregar");
const contenedor = document.getElementById("contenedor");
const foto = document.getElementById("foto");



btnAgregar.addEventListener("click",async function () {


    const valorEquipo = {
        nombreEquipo: equipo.value,
        fechaCreacion: fechaCreacion.value,
        paisCreacion: paisCreacion.value
    }

   
    const equipoGuardado = await postEquipos(valorEquipo)
    console.log(equipoGuardado);

    contenedor.innerHTML="";
    
    mostrarEquipos()


}) 


mostrarEquipos()

async function mostrarEquipos() {

    const equiposObtenidos = await getEquipos();

    for (let index = 0; index < equiposObtenidos.length; index++) {

        const elementoEquipo = document.createElement("h2");
        const elementoFecha = document.createElement("p");
        const elementoPais = document.createElement("p");
        const btnEliminar = document.createElement("button");
        const btnEditar = document.createElement("button");
        const divIndividual = document.createElement("div");
        btnEditar.textContent="Editar";
        btnEliminar.textContent="Eliminar";
        elementoEquipo.textContent= equiposObtenidos[index].nombreEquipo 
        elementoFecha.textContent= equiposObtenidos[index].fechaCreacion;
        elementoPais.textContent= equiposObtenidos[index].paisCreacion;

        divIndividual.appendChild(elementoEquipo);
        divIndividual.appendChild(elementoFecha);
        divIndividual.appendChild(elementoPais);
        divIndividual.appendChild(btnEliminar);   
        divIndividual.appendChild(btnEditar)
        contenedor.appendChild(divIndividual);
      
        btnEliminar.addEventListener("click", function () {
             
          eliminarEquipos(equiposObtenidos[index].id);
                  
        })
        btnEditar.addEventListener("click",function () {

            let nuevoNombre = document.createElement("input");
            let nuevoPais = document.createElement("input");
            let nuevaFecha = document.createElement("input");
            nuevaFecha.type="date";
            nuevoNombre.placeholder="Nuevo nombre del equipo";
            nuevoPais.placeholder="Nuevo pais de creacion";
            let btnGuardarEdicion = document.createElement("button");
            btnGuardarEdicion.textContent="Actualizar";
            divIndividual.appendChild(nuevoNombre);
            divIndividual.appendChild(nuevoPais);
            divIndividual.appendChild(nuevaFecha);
            divIndividual.appendChild(btnGuardarEdicion);

            btnGuardarEdicion.addEventListener("click", function () {
  
              actualizarEquipos(nuevoNombre.value,nuevaFecha.value,nuevoPais.value,equiposObtenidos[index].id);
                       
            })    
            
        })
    
    }  
}


async function eliminarEquipos(id) {
    const equipoEliminado = await deleteEquipos(id);
    console.log(equipoEliminado);
    contenedor.innerHTML="";
    mostrarEquipos()
    
}

async function actualizarEquipos(equipo,fecha,pais,id) {
   
    const valorEquipo = {
         nombreEquipo: equipo,
    
    }


    const equipoActualizado = await patchEquipos(valorEquipo,id)
    console.log(equipoActualizado);   
}






























