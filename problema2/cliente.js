let free = false;

const validarCliente = (time) => {
    let edad = prompt("¿Cual es tu edad?")
    if(edad > 18){
        if (time >= 2 && time < 7 && free == false) alert("Puedes pasar gratis");
        else alert(`Tienes que pagar la entrada son las: ${time}`);
    }else alert("No puedes pasar")
}

validarCliente(23);
validarCliente(6);
validarCliente(10);
validarCliente(1);