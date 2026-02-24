
import { postUsuarios,getUsuarios,putUsuarios,deleteUsuarios } from "../services/serviceUsuarios.js";

const nombre= document.getElementById("nombre");
const apellido= document.getElementById("apellido");
const edad= document.getElementById("edad");
const guardar= document.getElementById("guardar");
const usuariosData= document.getElementById("usuariosData");



guardar.addEventListener("click",async function () {

   
    const usuario={
        nombre:nombre.value,
        apellido:apellido.value,
        edad:edad.value

    }


    let usuarioGuardado= await postUsuarios(usuario);

    console.log(usuarioGuardado);
    
    
    usuariosData.innerHTML="";

    mostrarUsuarioPantalla()
})

///////////////////////////////////////////////////////////////////////////////////

async function obtenerUsuarios() {

    const usuariosObtenidos = await getUsuarios();


    return usuariosObtenidos;
    
       
}


async function mostrarUsuarioPantalla() {
    
    let usuariosFinales= await obtenerUsuarios();


    for (let index = 0; index < usuariosFinales.length; index++) {

        
        let h3 = document.createElement("h3");
        let btnEditar = document.createElement("button"); 
        let btnEliminar = document.createElement("button"); 
        btnEliminar.textContent="Eliminar";
        btnEditar.textContent="Editar";
        h3.textContent = usuariosFinales[index].nombre + " " + usuariosFinales[index].apellido + " " + usuariosFinales[index].edad + " " + usuariosFinales[index].id;
        usuariosData.appendChild(h3);
        usuariosData.appendChild(btnEditar);
        usuariosData.appendChild(btnEliminar);


        btnEliminar.addEventListener("click",async function () {
           

              
              
        let datoEliminado = await deleteUsuarios(usuariosFinales[index].id)
            console.log(datoEliminado);
            

         
        })

        btnEditar.addEventListener("click",async function () {

            ///aqui se hace un procedimiento para obtener los nuevos valores del registro como el ID del registro
          
          


            
            let nuevoValor ={
                     nombre: "Son",
                     apellido: "Goku",
                     edad: "58"
            }

            
            

           let datoActualizado = await putUsuarios(nuevoValor,usuariosFinales[index].id)

           console.log(datoActualizado);
           

        })
  
        
    }




 
}

mostrarUsuarioPantalla()