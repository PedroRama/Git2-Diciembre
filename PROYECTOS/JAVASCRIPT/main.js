let total = 0; // Variable para almacenar el tota, la ponemos fuera del dom porque sino no funciona

document.addEventListener("DOMContentLoaded", () => { //ESTO LO USAMOS PARA QUE EL CÓDIGO SE EJECTUTE UNA VEZ EL HTML ESTÉ CARGADO
    
    const productContainer = document.getElementById("product-container"); //aquí cargamos en la varibale "productContainer" el div con el id "product-container"
    const cestaLista = document.getElementById("cesta-lista"); 
    const verCestaButton = document.getElementById("verCesta"); 
    const cesta = document.getElementById("cesta"); 
    const salirCestaButton = document.getElementById("salirCesta"); 
    const vaciarCestaButton = document.getElementById("vaciarCesta"); 
    const inicioButton = document.getElementById("inicio"); 
    const blogButton = document.getElementById("blog");
    const contactoButton = document.getElementById("contacto");
    const comprarButton = document.getElementById("comprar");

    product.forEach(item => { //aquí recorremos el array "product" y por cada item del array creamos un div con la imagen, descripción y precio del producto
        const productDiv = document.createElement('div');
        productDiv.classList.add('product'); // Añadimos la clase 'product' a cada div de producto
        // aquí creamos el div con la imagen, descripción y precio del producto
        productDiv.innerHTML = ` 
            <p><h3>${item.nombre}</h3></p>
            <img src="${item.img}" alt="${item.nombre}" style="width:350px;height:300px;border-radius: 20%;">
            <p>${item.descripción}</p>
            <p style="font-size: 18px;"><b>Precio: ${item.precio}€</b></p>
            <button class="boton-añadirCarrito">AGREGAR AL CARRITO</button>
        `;
        productContainer.appendChild(productDiv); //aquí agregamos el div creado al div con el id "product-container"

        // Añadir evento click al botón dentro del div del producto
        const addButton = productDiv.querySelector('.boton-añadirCarrito');
        addButton.addEventListener('click', () => {
            añadirAlCarrito(item);
        });
    });

    verCestaButton.addEventListener('click', () => {
        cesta.classList.toggle('cesta-visible');
        cesta.classList.toggle('cesta-oculta');
    });

    salirCestaButton.addEventListener('click', () => {
        cesta.classList.add('cesta-oculta');
        cesta.classList.remove('cesta-visible');
    });

    vaciarCestaButton.addEventListener('click', () => {
        vaciarCesta();
    });


    //Botones menú futura actualización
    inicioButton.addEventListener('click', () => {
        alert("No disponible");
    });
    blogButton.addEventListener('click', () => {
        alert("No disponible");
    });
    contactoButton.addEventListener('click', () => {
        alert("No disponible");
    });

    //Botón comprar
    comprarButton.addEventListener('click', () => {
        alert("FUNCIONALIDAD EN FUTURAS ACTUALIZACIONES");
    });

}); 

function añadirAlCarrito(item) {
    if (item.stock > 0) {

        // Cambiar el fondo del boton de cesta a verde
        const cesta = document.getElementById("verCesta");
        cesta.style.backgroundColor = "green";

        const cestaLista = document.getElementById("cesta-lista");
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nombre} ${item.precio}€`;
        cestaLista.appendChild(listItem);

        // Actualizar el total
        total += item.precio;
        document.getElementById("total").textContent = total.toFixed(2);

        // Restar el stock
        item.stock -= 1;
        document.getElementById(`stock-${item.nombre}`).textContent = item.stock;

        // Mostrar alerta si el stock es 0
        if (item.stock === 0) {
            alert("No hay más stock de este producto");
        }
    } else{
        alert("No hay más stock de este producto");
    }
}

function vaciarCesta() {

    const cestaLista = document.getElementById("cesta-lista");

    while (cestaLista.firstChild) {
        cestaLista.removeChild(cestaLista.firstChild);
    }

    // Reseteamos el total
    total = 0;
    document.getElementById("total").textContent = total.toFixed(2);

    // Restablecer el fondo del contenedor de la cesta a su color original
    const cesta = document.getElementById("cesta");
    cesta.style.backgroundColor = ""; // Restablece el fondo al valor por defecto

    const cestaColor = document.getElementById("verCesta");
    cestaColor.style.backgroundColor = "transparent";
    
}