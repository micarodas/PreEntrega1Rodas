alert("Bienvenida/o a Bakugo Store");


const precioRemera = 2000;
const precioPantalon = 2500;
const precioBuzo = 3000;
const precioZapatillas = 5000;

let remeras = parseInt(prompt("cuantas remeras va a comprar?"));
let pantalones = parseInt(prompt("cuantas pantalones va a comprar?"));
let buzos = parseInt(prompt("cuantos buzos va a comprar?"));
let zapatillas = parseInt(prompt("cuantas zapatillas va a comprar?"));

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

costoTotal(remeras,pantalones,buzos,zapatillas)