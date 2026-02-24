

//GET Equipos funcion que consulta al endpoint a traves de un fetch,conuslta al API al Endpoint

//este es el archivo de servicios

console.log("Probando");



async function getEquipos() {

    try {

        const respuestaServidor = await fetch("http://localhost:3001/equipos")
      
        
        const datosEquipos= await respuestaServidor.json();
   
        
        return datosEquipos;
        
    } catch (error) {
        
        console.error("Error al obtener los equipos", error);
    }


}

export{getEquipos}



//POST equipos AQUI S EVA A CREAR LA FUNCION PARA GUARDAR UN NUEVO USUARIO


async function postEquipos(equipo){

       try {

        const respuesta = await fetch("http://localhost:3001/equipos",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(equipo)

        })

        const datosEquipos= await respuesta.json();

        return datosEquipos;
        
    } catch (error) {
        
        console.error("Error al crear el equipo", error);
    }



}

export{postEquipos}


//PUT


async function putEquipos(equipo,id){

       try {

        const respuesta = await fetch("http://localhost:3001/equipos/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(equipo)

        })

        const datosEquipos= await respuesta.json();

        return datosEquipos;
        
    } catch (error) {
        
        console.error("Error al actualizar los cambios", error);
    }
}

export{putEquipos}




//PATCH



async function patchEquipos(equipo,id){

       try {

        const respuesta = await fetch("http://localhost:3001/equipos/"+id,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(equipo)

        })

        const datosEquipos= await respuesta.json();

        return datosEquipos;
        
    } catch (error) {
        
        console.error("Error al actualizar los cambios", error);
    }
}

export{patchEquipos}





//DELETE



async function deleteEquipos(id){

       try {

        const respuesta = await fetch("http://localhost:3001/equipos/"+id,{
            method:"DELETE",
        })

        const datosEquipos= await respuesta.json();

        return datosEquipos;
        
    } catch (error) {
        
        console.error("Error al Eliminar el registro", error);
    }
}

export{deleteEquipos}




