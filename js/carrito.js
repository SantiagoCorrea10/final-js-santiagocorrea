let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar productos en el carrito
function mostrarCarrito() {
    const itemsCarrito = document.getElementById('itemsCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    itemsCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${producto.nombre} - $${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        itemsCarrito.appendChild(div);
        total += producto.precio;
    });

    totalCarrito.innerHTML = `Total: $${total}`;
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Agregar productos al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    carrito.push(producto);
    mostrarCarrito();
    Swal.fire({
        title: 'Producto agregado',
        text: `${producto.nombre} ha sido agregado al carrito.`,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}

// Eliminar productos individualmente
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

// Vaciar el carrito
document.getElementById('vaciarCarrito').addEventListener('click', () => {
    carrito = [];
    mostrarCarrito();
    Swal.fire({
        title: 'Carrito vaciado',
        text: 'Has vaciado el carrito.',
        icon: 'info',
        confirmButtonText: 'OK'
    });
});

// Finalizar compra
document.getElementById('comprar').addEventListener('click', () => {
    if (carrito.length === 0) {
        Swal.fire({
            title: 'Carrito vacío',
            text: 'No tienes productos en tu carrito.',
            icon: 'warning',
            confirmButtonText: 'OK'
        });
    } else {
        document.getElementById('modalCompra').style.display = 'block';
    }
});

// Cerrar modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modalCompra').style.display = 'none';
});

// Simular el proceso de compra
document.getElementById('formCompra').addEventListener('submit', (e) => {
    e.preventDefault();
    carrito = [];
    localStorage.removeItem('carrito');
    mostrarCarrito();
    document.getElementById('modalCompra').style.display = 'none';
    Swal.fire({
        title: 'Compra realizada',
        text: 'Gracias por tu compra.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});