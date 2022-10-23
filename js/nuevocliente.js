import { mostrarAlerta } from "./funciones.js";

//Funcion ifi (permite que se mantengan las variables y funciones)
(function(){
   
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded',()=>{

        formulario.addEventListener('submit',validarFormulario);
    })


    //Funciones
    function validarFormulario(e)
    {
        e.preventDefault();
    
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        //Creamos objeto pasandole los datos del input
        const cliente ={
            nombre,
            email,
            telefono,
            empresa
        }
        //Validamos si estan vacios o no los inputs
        if(!validarCampos(cliente))
        {
            mostrarAlerta('Todos los campos son obligatorios');
        }

            console.log('Datos completos');
    }

    function validarCampos(objeto)
    {//Every solo Retorna TRUE OR FALSE, iteramos en el objeto
        return Object.values(objeto).every(value => value !=='' )
    }
})();