document.addEventListener("DOMContentLoaded", () => { //ESTO LO USAMOS PARA QUE EL CÓDIGO SE EJECTUTE UNA VEZ EL HTML ESTÉ CARGADO
    
    añadirAlCarrito();

    const productContainer = document.getElementById("product-container"); //aquí cargamos en la varibale "productContainer" el div con el id "product-container"

    product.forEach(item => { //aquí recorremos el array "product" y por cada item del array creamos un div con la imagen, descripción y precio del producto
        const productDiv = document.createElement('div');
        // aquí creamos el div con la imagen, descripción y precio del producto
        productDiv.innerHTML = ` 
            <p>${item.nombre}</p>
            <img src="${item.img}" alt="${item.nombre} "style="width:100px;height:100px;">
            <p>${item.descripción} </p>
            <p>Precio: ${item.precio}€ </p>
            <button class="boton-añadirCarrito" id="añadirCarrito">AGREGAR AL CARRITO</button>
        `;
        productContainer.appendChild(productDiv); //aquí agregamos el div creado al div con el id "product-container"
    });
}); 

function añadirAlCarrito() {

    alert("hola, en este método haremos un boton para que se añade a al carrito");
    
}




