document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("productos-container");
  const modal = document.getElementById("detalle-producto");
  const span = document.getElementsByClassName("close")[0];

  // Datos de los productos (puedes cargarlos desde una base de datos o un archivo JSON)
  const productos = [
    { imagen: "imgR/Reducido2.jpg", nombre: "Diseño 1", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido3.jpg", nombre: "Diseño 2", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido4.jpg", nombre: "Diseño 3", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido5.jpg", nombre: "Diseño 4", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido6.jpg", nombre: "Diseño 5", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido7.jpg", nombre: "Diseño 6", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido9.jpg", nombre: "Diseño 7", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido10.jpg", nombre: "Diseño 8", descripcion: "Refrescante,acogedor ,lindo"},
    { imagen: "imgR/Reducido11.jpg", nombre: "Diseño 9", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido12.jpg", nombre: "Diseño 10", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido14.jpg", nombre: "Diseño 11", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido16.jpg", nombre: "Diseño 12", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido17.jpg", nombre: "Diseño 13", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido18.jpg", nombre: "Diseño 14", descripcion: "Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido19.jpg", nombre: "Diseño 14", descripcion:"Refrescante,acogedor ,lindo" },
    { imagen: "imgR/Reducido20.jpg", nombre: "Diseño 14", descripcion: "Refrescante,acogedor ,lindo" },

    // Añade más productos aquí
  ];

  // Función para mostrar el detalle de un producto
  function mostrarDetalle(index) {
    const producto = productos[index];
    document.getElementById("detalle-imagen").src = producto.imagen;
    document.getElementById("detalle-nombre").textContent = producto.nombre;
    document.getElementById("detalle-descripcion").textContent = producto.descripcion;
    modal.style.display = "block";
  }

  // Cargar los productos en el catálogo
  productos.forEach((producto, index) => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    productoDiv.appendChild(imagen);
    container.appendChild(productoDiv);

    productoDiv.addEventListener("click", function() {
      mostrarDetalle(index);
    });
  });

  // Cerrar el modal al hacer clic en la X
  span.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Cerrar el modal al hacer clic fuera de él
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});