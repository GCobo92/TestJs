class Ropa {
    constructor() {
        this.talla = [];
        this.color = [];
        this.precio = [];
        this.tienda = 'Parquesur';
    }
}

class Camisetas extends Ropa {
    constructor() {
        this.talla = ['xs', 'm', 'l', 'xl'];
        this.color = ['rojo', 'verde'];
    }
}
 