
const localStorageKey = 'ecommerce_data';
const productosContainer = document.getElementById('productos-container');
const carrito = [];

let ecommerceData = localStorage.getItem(localStorageKey);

if (!ecommerceData) {
  ecommerceData = {
    nombre: '',
    direccionDomicilio: '',
    productosSeleccionados: [],
    envioDomicilio: false,
  };
} else {
  ecommerceData = JSON.parse(ecommerceData);
}

function guardarDatosEnLocalStorage() {
  localStorage.setItem(localStorageKey, JSON.stringify(ecommerceData));
}

function informarEnvio(eleccionEnvio, direccion) {
  if (eleccionEnvio) {
    alert("Proximamente recibirá el pedido en su domicilio: " + direccion);
  } else {
    alert("Deberá retirar su pedido en nuestro Showroom");
  }
}

function agregarProductoAlCarrito(nombreProducto, precioProducto) {
  const productoSeleccionado = {
    nombre: nombreProducto,
    precio: precioProducto,
  };

  carrito.push(productoSeleccionado);
  ecommerceData.productosSeleccionados = carrito;
  guardarDatosEnLocalStorage();

  alert(`"${nombreProducto}" se ha agregado al carrito.`);
}

let nombre = ecommerceData.nombre || prompt('Ingrese su nombre completo');
ecommerceData.nombre = nombre;
guardarDatosEnLocalStorage();
alert('¡Bienvenid@ ' + nombre + '!');

let direccionDomicilio = ecommerceData.direccionDomicilio || prompt('Ingrese la dirección de su domicilio');
ecommerceData.direccionDomicilio = direccionDomicilio;
guardarDatosEnLocalStorage();

fetch('productos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    data.productos.forEach(producto => {
      const productoDiv = document.createElement('div');
      productoDiv.classList.add('producto');
      productoDiv.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio}</p>
        <button class="agregar-carrito">Agregar al carrito</button>
      `;
      productosContainer.appendChild(productoDiv);
    });

    productosContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('agregar-carrito')) {
        const productoDiv = event.target.parentElement;
        const nombreProducto = productoDiv.querySelector('h3').textContent;
        const precioProducto = parseFloat(productoDiv.querySelector('p').textContent.replace('Precio: $', '').trim());
        agregarProductoAlCarrito(nombreProducto, precioProducto);
      }
    });
  })
  .catch(error => {
    console.error(error);
  });

let envio = prompt("¿Desea que le enviemos el/los producto/s a su domicilio? 1: SI / 2: NO");
let envioDomicilio;

if (envio === "1") {
  envioDomicilio = true;
} else if (envio === "2") {
  envioDomicilio = false;
} else {
  alert("Error");
}

informarEnvio(envioDomicilio, direccionDomicilio);