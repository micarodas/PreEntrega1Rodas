alert("Bienvenida/o a Bakugo Store");

class Producto {
    constructor(nombre, talle, precio, stock){
    this.nombre = nombre;
    this.talle = talle;
    this.precio = precio;
    this.stock = stock;
    }
}

let remera = new Producto ("remera_a", "M" , 2000, 3 );
let pantalon = new Producto ("pantalon_a", "M" , 2500, 3 );
let buzo = new Producto ("buzo_a", "M" , 3000, 3 );
let zapatillas = new Producto ("zapatillas_a", "M" , 5000, 3 );

const precioRemera = 2000;
const precioPantalon = 2500;
const precioBuzo = 3000;
const precioZapatillas = 5000;

let remerasCantidad = parseInt(prompt("cuantas remeras va a comprar?"));
let pantalonesCantidad = parseInt(prompt("cuantas pantalones va a comprar?"));
let buzosCantidad = parseInt(prompt("cuantos buzos va a comprar?"));
let zapatillasCantidad = parseInt(prompt("cuantas zapatillas va a comprar?"));

function costoTotal (remeras,pantalones,buzos,zapatillas){
    
    let costoTotal = ((remeras*precioRemera)+(pantalones*precioPantalon)+(buzos*precioBuzo)+(zapatillas*precioZapatillas));
    alert(`el precio total es: ${costoTotal}`)

    if (isNaN(costoTotal)){
        alert("los valores ingresados son incorrectos, recargue la pagina");
    }

    else{
        console.log(`el precio total es: ${costoTotal}`);
        alert(`el precio total es: ${costoTotal}`);
    }
}

costoTotal(remera, pantalon,buzo,zapatillas)