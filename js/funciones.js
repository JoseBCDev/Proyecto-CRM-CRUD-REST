
export function mostrarAlerta(mensaje)
{
    const existeAlerta = document.querySelector('.alerta');
    
    if(!existeAlerta)
    {
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center');
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}


export function validarCampos(objeto)
{//Every solo Retorna TRUE OR FALSE, iteramos en el objeto
    return Object.values(objeto).every(value => value !=='' )
}