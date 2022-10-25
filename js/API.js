
const url = 'http://localhost:3000/clientes';

//PETICION AL SERVIDOR - AGREGAR NUEVO CLIENTE
export const nuevoCliente = async cliente => {

    try {
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(cliente),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        //Enviamos a la pagina index.html una vez realizada la consulta
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

//PETICION AL SERVIDOR - MOSTRAR CLIENTES
export const obtenerClientes = async()=>{

    try {
        const resultado = await fetch(url);
        const cliente = await resultado.json();

        return cliente;
    } catch (error) {
        console.log(error);
    }
}

//PETICION AL SERVIDOR - ELIMINAR CLIENTE
export const eliminarCliente = async (id)=>{
    try {
        fetch(`${url}/${id}`,{
            method: 'DELETE',
        })
    } catch (error) {
        console.log(error);
    }
}

//PETICION AL SERVIDOR - OBTENER UN CLIENTE
export const obtenerUnCliente = async(idCliente)=>{

    try {
        const resultado = await fetch(`${url}/${idCliente}`);
        const cliente = await resultado.json();

        return cliente;
    } catch (error) {
        console.log(error);
    }
}

//PETICION AL SERVIDOR - EDITAR UN CLIENTE
export const editarCliente = (Cliente)=>{
    
    try {
        fetch(`${url}/${Cliente.id}`,{
            method: 'PUT',
            body: JSON.stringify(Cliente),
            headers: {
                'Content-Type':'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}