class Mascota {
    constructor(patas, nombre) {
        this.patas = patas;
        this.cerebro = true;
        this.nombre = nombre;
        console.log('Se creo la Mascota');
    }
    getNombre(){
        return this.nombre;
    }
}

module.exports = {
    Mascota
}