import { obtenerUnCliente,editarCliente } from "./API.js";
import { mostrarAlerta,validarCampos } from "./funciones.js";

(function(){

//Variables

    const formulario = document.querySelector('#formulario');

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded',async()=>{
        //Metodo para buscar en la URL del navegador(ventana) abierta.
        const parametroURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametroURL.get('id'));//Obtenemos el id de la URL
        //APLICAMOS ASYNC AWAIT para esperar que se ejecute correctamente la consulta al servidor
        const cliente = await obtenerUnCliente(idCliente);
        
        mostrarCliente(cliente);
    });

    formulario.addEventListener('submit',validarFormulario);

//Funciones

function mostrarCliente(cliente)
{
    const {nombre,email,telefono,empresa,id} = cliente;
    //Mandamos todos los valores al HTML en cada Input
    nombreInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;
    idInput.value = id;
}

function validarFormulario(e)
{
    e.preventDefault();

    //Creamos objeto pasandole los datos del input
        const OBJcliente ={
            nombre:nombreInput.value,
            email:emailInput.value,
            telefono:telefonoInput.value,
            empresa:empresaInput.value,
            id:parseInt(idInput.value)
        }
        //Validamos si estan vacios o no los inputs

        if(!validarCampos(OBJcliente))
        {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        } 

        editarCliente(OBJcliente);
}
})();