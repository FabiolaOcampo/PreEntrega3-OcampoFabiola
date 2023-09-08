let nombre = prompt("Ingrese su nombre completo")
    alert("¡Bienvenid@ "+nombre+"!");

let direccionDomicilio = prompt("Ingrese la direccón de su domicilio");



function Producto (nombre, elaboracion, precio) {
        this.nombre  = nombre.toUpperCase();
        this.elaboracion = elaboracion;
        this.precio  = parseFloat(precio); 
    }
const productos = [];
productos.push(new Producto("Taza Flora","Cerámica de mesa", 3000));
productos.push(new Producto("Cuenquito","Cerámica en torno", 2500));
productos.push(new Producto("Platito Amor","Cerámica de mesa", 1500));   
productos.push(new Producto("Plato Circular Primavera","Cerámica de molde", 2500));
productos.push(new Producto("Set de plato y taza Primavera","Cerámica de mesa", 6500));  
productos.push(new Producto("Plato Ovoide Primavera","Cerámica de molde", 2500));
 
function buscarProductoPorNombre(nombre) {
    nombre = nombre.toUpperCase();
    return productos.find(function(producto) {
        return producto.nombre === nombre;
    });
}


function mostrarPropiedadesProducto(producto) {
    alert("Nombre del producto: " + producto.nombre + "\nMétodo de elaboración: " + producto.elaboracion + "\nPrecio: $" + producto.precio);
}

function seleccionarYMostrarProducto() {
    const nombreProducto = prompt("Ingrese el nombre del producto que desea añadir al carrito:");

    const productoSeleccionado = buscarProductoPorNombre(nombreProducto);

    
    if (productoSeleccionado) {
        mostrarPropiedadesProducto(productoSeleccionado);

    } else {
        alert("El producto no se encuentra en nuestro catálogo.");
    }
}

seleccionarYMostrarProducto();


let envio= prompt("¿Desea que le enviemos el/los producto/s a su domicilio? 1:SI / 2:NO");
 let envioDomicilio;

 if(envio== "1"){
    envioDomicilio=true;
 }else if (envio == "2"){
    envioDomicilio=false;
 }else{
    alert("error"); 
 }


 function informarEnvio(eleccionEnvio, direccion){
    if(eleccionEnvio==true){
        alert("Proximamente recibirá el pedido en su domicilio: "+direccion); 
    }else{
        alert("Deberá retirar su pedido en nuestro Showroom");
    }
 }
 informarEnvio(envioDomicilio,direccionDomicilio)



























    




/* 
let nombre = prompt("Ingrese su nombre completo")
    alert("¡Bienvenid@ "+nombre+"!");

let direccionDomicilio = prompt("Ingrese la direccón de su domicilio");

let nombreProducto = prompt("Ingrese el nombre del producto que desea comprar (presione 0 para salir)");

while(nombreProducto!= "0"){

switch(nombreProducto){
    case "Taza Flora":
        alert("Usted a seleccionado comprar el artículo: Taza Flora= $3000");
        break;
    case "Cuenquito":
        alert("Usted a seleccionado comprar el artículo: Cuenquito= $2500");
        break;
    case "Platito Amor":
        alert("Usted a seleccionado comprar el artículo: Platito Amor= $1500");
        break;
    case "Plato Circular Primavera":
        alert("Usted a seleccionado comprar el artículo: Plato Circular Primaveras= $2500");
        break
    case "Set de plato y taza Primavera":
        alert("Usted a seleccionado comprar el artículo: Set de plato y taza primavera= $6500");
        break;
    case "Plato Ovoide Primavera":
        alert("Usted a seleccionado comprar el artículo: Plato Ovoide Primavera= $2500");
        break                
    default:
        alert("Sin stock");
        break;

}nombreProducto = prompt("Ingrese el nombre del producto que desea comprar (presione 0 para salir)");
} 

 ;*/


 