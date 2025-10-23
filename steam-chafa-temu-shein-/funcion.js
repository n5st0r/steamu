let enIngles = false;
let carrito = [];

const botonesAgregar = document.querySelectorAll(".agregar");
const botonCarrito = document.getElementById("carrito");
const botonComprar = document.getElementById("comprar");
const botonTraducir = document.getElementById("traducir_pagina");

function agregarAlCarrito(event) {
  const juegoSeleccionado = event.target.parentElement.querySelector("h2").textContent;
  carrito.push(juegoSeleccionado);
  alert(enIngles ? "You have added " + juegoSeleccionado + " to your cart" : "Has agregado " + juegoSeleccionado + " al carrito");
}

function mostrarCarrito() {
  if (carrito.length === 0) {
    alert(enIngles ? "The cart is empty" : "El carrito está vacío");
    return;
  }

  let mensaje = enIngles ? "Games in your cart:\n" : "Juegos en tu carrito:\n";
  carrito.forEach((juego, index) => {
    mensaje += `${index + 1}. ${juego}\n`;
  });

  mensaje += enIngles ? "\nIf you want to remove a game, type its number. Cancel to exit." : "\nSi quieres eliminar un juego, escribe su número. Cancelar para salir.";

  let eliminar = prompt(mensaje);
  if (eliminar !== null) {
    const indice = parseInt(eliminar) - 1;
    if (!isNaN(indice) && indice >= 0 && indice < carrito.length) {
      const eliminado = carrito.splice(indice, 1);
      alert(enIngles ? "You have removed " + eliminado + " from the cart" : "Has eliminado " + eliminado + " del carrito");
    } else {
      alert(enIngles ? "Invalid number, no game was removed" : "Número inválido, no se eliminó ningún juego");
    }
  }
}

function comprar() {
  if (carrito.length === 0) {
    alert(enIngles ? "There are no games in the cart to buy" : "No hay juegos en el carrito para comprar");
    return;
  }
  alert((enIngles ? "You have bought the following games:\n" : "Has comprado los siguientes juegos:\n") + carrito.join("\n"));
  carrito = [];
}

botonesAgregar.forEach(boton => boton.addEventListener("click", agregarAlCarrito));
botonCarrito.addEventListener("click", mostrarCarrito);
botonComprar.addEventListener("click", comprar);

// Traducción español/inglés
botonTraducir.addEventListener("click", () => {
  enIngles = !enIngles;

  document.querySelector("header h1").textContent = "Steamu";

  const ofertaTitulo = document.querySelector(".oferta h2");
  const ofertaTexto = document.querySelector(".oferta p");
  const ofertaSmall = document.querySelector(".oferta small");

  if (enIngles) {
    ofertaTitulo.textContent = "SPECIAL OFFER JUST FOR YOU";
    ofertaTexto.textContent = "30% OFF! TAKE ADVANTAGE BEFORE IT ENDS";
    ofertaSmall.textContent = "Valid only from 30/02 to 31/02";
  } else {
    ofertaTitulo.textContent = "Oferta ESPECIALMENTE PARA TI";
    ofertaTexto.textContent = "OFERTA DEL 30%  APROVECHA ANTES DE QUE SE ACABE";
    ofertaSmall.textContent = "SOLO Valido del 30/02 al 31/02";
  }

  // Traducir botones
  document.querySelectorAll(".agregar").forEach(boton => {
    boton.textContent = enIngles ? "Add to Cart" : "Agregar al carrito";
  });

  document.getElementById("comprar").textContent = enIngles ? "Buy" : "Comprar";
  document.getElementById("carrito").textContent = enIngles ? "View Cart" : "Ver Carrito";
  botonTraducir.textContent = enIngles ? "Traducir a Español" : "Translate to English";

  // Traducir los géneros (p)
  document.querySelectorAll(".juego p").forEach(parrafo => {
    const texto = parrafo.textContent.trim().toLowerCase();

    if (enIngles) {
      switch (texto) {
        case "terror":
          parrafo.textContent = "Horror";
          break;
        case "deportes":
          parrafo.textContent = "Sports";
          break;
        case "accion/disparos":
          parrafo.textContent = "Action/Shooter";
          break;
        case "mundo abierto":
          parrafo.textContent = "Open World";
          break;
        case "aventura":
          parrafo.textContent = "Adventure";
          break;
      }
    } else {
      switch (texto) {
        case "horror":
          parrafo.textContent = "Terror";
          break;
        case "sports":
          parrafo.textContent = "Deportes";
          break;
        case "action/shooter":
          parrafo.textContent = "Accion/Disparos";
          break;
        case "open world":
          parrafo.textContent = "Mundo abierto";
          break;
        case "adventure":
          parrafo.textContent = "Aventura";
          break;
      }
    }
  });
});
