// Definir los productos directamente en el archivo JavaScript
const productos = [
    { "id": 1, "nombre": "Mate de Calabaza", "precio": 1000, "imagen": "assets/mate1.jpg" },
    { "id": 2, "nombre": "Mate de Madera", "precio": 1200, "imagen": "assets/mate2.jpg" },
    { "id": 3, "nombre": "Mate de Cerámica", "precio": 1300, "imagen": "assets/mate3.jpg" },
    { "id": 4, "nombre": "Mate Imperial", "precio": 1500, "imagen": "assets/mate4.jpg" },
    { "id": 5, "nombre": "Bombilla de alpaca", "precio": 1400, "imagen": "assets/bombilla1.jpg" },
    { "id": 6, "nombre": "Bombilla de Acero", "precio": 1600, "imagen": "assets/bombilla2.jpg" },
    { "id": 7, "nombre": "Bolso Matero", "precio": 1800, "imagen": "assets/bolso1.jpg" },
    { "id": 8, "nombre": "Mochila Matera", "precio": 2000, "imagen": "assets/bolso2.jpg" }
];

// Función para mostrar los productos en la página
function mostrarProductos() {
    const contenedor = document.querySelector('.productos-container');
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        contenedor.appendChild(productoDiv);
    });
}

// Función para agregar productos al carrito con SweetAlert2
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    Swal.fire({
        title: 'Producto agregado',
        text: `${producto.nombre} ha sido agregado al carrito.`,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

// Llamar a la función para mostrar los productos
mostrarProductos();