let total = 0; // Variable para almacenar el tota, la ponemos fuera del dom porque sino no funciona

document.addEventListener("DOMContentLoaded", () => { //ESTO LO USAMOS PARA QUE EL CÓDIGO SE EJECTUTE UNA VEZ EL HTML ESTÉ CARGADO
    
    const productContainer = document.getElementById("product-container"); //aquí cargamos en la varibale "productContainer" el div con el id "product-container"
    const cestaLista = document.getElementById("cesta-lista"); //aquí cargamos en la variable "cestaLista" el ul con el id "cesta-lista"
    const verCestaButton = document.getElementById("verCesta"); //aquí cargamos en la variable "verCestaButton" el botón con el id "verCesta"
    const cesta = document.getElementById("cesta"); //aquí cargamos en la variable "cesta" el div con el id "cesta"
    const salirCestaButton = document.getElementById("salirCesta"); //aquí cargamos en la variable "salirCestaButton" el botón con el id "salirCesta"
    const vaciarCestaButton = document.getElementById("vaciarCesta"); //aquí cargamos en la variable "vaciarCestaButton" el botón con el id "vaciarCesta"
     

    product.forEach(item => { //aquí recorremos el array "product" y por cada item del array creamos un div con la imagen, descripción y precio del producto
        const productDiv = document.createElement('div');
        productDiv.classList.add('product'); // Añadir la clase 'product' a cada div de producto
        // aquí creamos el div con la imagen, descripción y precio del producto
        productDiv.innerHTML = ` 
            <p><b>${item.nombre}</b></p>
            <img src="${item.img}" alt="${item.nombre}" style="width:100px;height:100px;">
            <p>${item.descripción}</p>
            <p>Precio: ${item.precio}€</p>
            <button class="boton-añadirCarrito">AGREGAR AL CARRITO</button>
        `;
        productContainer.appendChild(productDiv); //aquí agregamos el div creado al div con el id "product-container"

        // Añadir evento click al botón dentro del div del producto
        const addButton = productDiv.querySelector('.boton-añadirCarrito');
        addButton.addEventListener('click', () => {
            añadirAlCarrito(item);
        });
    });

    // Asignar evento click al botón con id "verCesta"
    verCestaButton.addEventListener('click', () => {
        cesta.classList.toggle('cesta-visible');
        cesta.classList.toggle('cesta-oculta');
    });

    // Asignar evento click al botón con id "salirCesta"
    salirCestaButton.addEventListener('click', () => {
        cesta.classList.add('cesta-oculta');
        cesta.classList.remove('cesta-visible');
    });

    // Asignar evento click al botón con id "vaciarCesta"
    vaciarCestaButton.addEventListener('click', () => {
        vaciarCesta();
    });
}); 

function añadirAlCarrito(item) {
    const cestaLista = document.getElementById("cesta-lista");
    const listItem = document.createElement('li');
    listItem.textContent = `${item.nombre} ${item.precio}€`;
    cestaLista.appendChild(listItem);

    // Actualizar el total
    total += item.precio;
    document.getElementById("total").textContent = total.toFixed(2);

    // Cambiar el fondo de la cesta a verde
    const cesta = document.getElementById("verCesta");
    cesta.style.backgroundColor = "green";
}

function vaciarCesta() {
    const cestaLista = document.getElementById("cesta-lista");
    while (cestaLista.firstChild) {
        cestaLista.removeChild(cestaLista.firstChild);
    }

    // Resetear el total
    total = 0;
    document.getElementById("total").textContent = total.toFixed(2);

    const cesta = document.getElementById("verCesta");
    cesta.style.backgroundColor = "transparent";

}