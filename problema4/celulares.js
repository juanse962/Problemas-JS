class celular {
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido()
    {
        if (!this.encendido){ 
            alert("Prendiendo celular");
            this.encendido = true;
        }
        else{ 
            alert("El celular ya esta apagado");
            this.encendido = false
        }
    }
    reiniciar()
    {
        if (this.encendido == true) alert("Reiniciando celular")
        else alert("El celular esta apagado")
    }
    tomarFoto()
    {
        alert(`Foto tomada con una resolución de: ${this.rdp}`);
    }
    grabarVideo()
    {
        alert(`Video grabado en una resolución de: ${this.rdc}` )
    }
    mostrarInfo()
    {
        return `
        Color <b> ${this.color} </b> <br>
        Peso <b> ${this.peso} </b> <br>
        Resolución de video <b> ${this.rdc} </b> <br>
        Resolución de camara <b>${this.rdp} </b> <br>
        Ram <b> ${this.ram} </b> <br>
        `;
    }
}

class celularAltaGama extends celular{
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.rdce = rdce;
    }
    grabarVideoLento(){
        alert("Esta grabando lento")
    }
    reconocimientoFacial(){
        alert("Iniciando reconocimiento facial")
    }
    mostrarInfoAltaGama(){
        return this.mostrarInfo() + `RDCE <b> ${this.rdce} </b> <br>`
    }
}

/* const celular1 = new celular("rojo","150g","5 mpx","HD","1GB");
const celular2 = new celular("negro","154g","3 mpx","full HD","2GB");
const celular3 = new celular("blanco","140g","2 mpx","full HD","3GB");
 */

 /* 
celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido(); */

const celular1 = new celularAltaGama("Rojo","130g","50mpx","4K","3GB","Full HD");
const celular2 = new celularAltaGama("Blanco","123g","30mpx","4K","2GB","HD");

document.write(`
    Celular1: <br> ${celular1.mostrarInfoAltaGama()}
    <br> Celular2: <br> ${celular2.mostrarInfoAltaGama()}
`);
