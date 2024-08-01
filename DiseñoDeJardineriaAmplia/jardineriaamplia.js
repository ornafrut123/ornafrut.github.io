document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("productos-container");
    const modal = document.getElementById("detalle-producto");
    const span = document.getElementsByClassName("close")[0];
  
    // Datos de los productos (puedes cargarlos desde una base de datos o un archivo JSON)
    const productos = [
      { imagen: "images/ampleo1.1.jpg", nombre: "Diseño uno", descripcion:"Refrescante,acogedor ,lindo" },
      { imagen: "images/amplio1.jpg", nombre: "Diseño dos", descripcion:"Refrescante,acogedor ,lindo" },
      { imagen: "images/ampleo2.webp", nombre: "Diseño tres", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "images/amplio3.jpg", nombre: "Diseño 4", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "images/amplio4.jpg", nombre: "Diseño 5", descripcion:"Refrescante,acogedor ,lindo" },
      { imagen: "images/amplio5.jpg", nombre: "Diseño 6", descripcion: "Refrescante,acogedor ,lindo"},
      { imagen: "images/amplip6.jpg", nombre: "Diseño 7", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "images/amplio7.jpg", nombre: "Diseño 8", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "images/amplio8.jpg", nombre: "Diseño 9", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "images/amplio9.jpg", nombre: "Diseño 10", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "images/amplio10.jpg", nombre: "Diseño 11", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "images/amplio11.jpg", nombre: "Diseño 12", descripcion: "Refrescante,acogedor ,lindo"},
      
  
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