document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("productos-container");
    const modal = document.getElementById("detalle-producto");
    const span = document.getElementsByClassName("close")[0];
  
    // Datos de los productos (puedes cargarlos desde una base de datos o un archivo JSON)
    const productos = [
      { imagen: "imgDA/azotea1.jpg", nombre: "Diseño 1", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea2.jpg", nombre: "Diseño 2", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea3.jpg", nombre: "Diseño 3", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea4.jpg", nombre: "Diseño 4", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea5.jpg", nombre: "Diseño 5", descripcion: "Refrescante,acogedor ,lindo"},
      { imagen: "imgDA/azotea6.jpg", nombre: "Diseño 6", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea7.jpg", nombre: "Diseño 7", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea8.jpg", nombre: "Diseño 8", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea9.jpg", nombre: "Diseño 9", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea10.jpg", nombre: "Diseño 10", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea11.jpg", nombre: "Diseño 11", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea12.jpg", nombre: "Diseño 12", descripcion:"Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea13.jpg", nombre: "Diseño 13", descripcion:"Refrescante,acogedor ,lindo"},
      { imagen: "imgDA/azotea14.jpg", nombre: "Diseño 14", descripcion: "Refrescante,acogedor ,lindo" },
      { imagen: "imgDA/azotea15.jpg", nombre: "Diseño 15", descripcion: "Refrescante,acogedor ,lindo"},

  
  
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