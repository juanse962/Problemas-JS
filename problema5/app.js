class app {
    constructor(descargas, puntuacion, peso)
    {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if (!this.iniciada && this.instalada) {
            this.iniciada = true;
            alert("app encendida");
        }
    }
    cerrar(){
        if (this.iniciada  && this.instalada) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if (!this.instalada) {
            this.instalada = true;
            alert("La app ha sido instalada correctamente");
        }
    }
    desinstalar(){
        if (this.instalada) {
            this.instalada = false;
            alert("La app ha sido desinstalada correctamente");
        }
    }
    appInfo(){
        return `
        Descargas:  <b>${this.descargas}</b></br>
        Puntuación: <b>${this.puntuacion}</b></br>
        Peso:       <b>${this.peso}</b></br>
        `
    }
}

const app1 = new app("26.000","5 estrellas","900mb");

app1.instalar();
app1.abrir();
app1.cerrar();
document.write( app1.appInfo() );
app1.desinstalar();