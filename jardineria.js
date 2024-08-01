document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("productos-container");
    const modal = document.getElementById("detalle-producto");
    const span = document.getElementsByClassName("close")[0];
  
    // Datos de los productos (puedes cargarlos desde una base de datos o un archivo JSON)
    const productos = [
      { imagen: "images/ampleo1.1.jpg", nombre: "Diseño uno", descripcion: "Descripción del Producto 1" },
      { imagen: "images/ampleo2.webp", nombre: "Diseño dos", descripcion: "Descripción del Producto 1" },
      { imagen: "images/amplio1.jpg", nombre: "Diseño tres", descripcion: "Descripción del Producto 1" },
      { imagen: "images/amplio2.jpg", nombre: "Diseño 4", descripcion: "Descripción del Producto 1" },
      { imagen: "images/amplio3.jpg", nombre: "Diseño 5", descripcion: "Descripción del Producto 1" },
      { imagen: "images/amplio4.jpg", nombre: "Diseño 6", descripcion: "Descripción del Producto 1" },
      { imagen: "images/amplio5.webp", nombre: "Diseño 7", descripcion: "Descripción del Producto 1" },
      { imagen: "images/amplip6.jpg", nombre: "Diseño 8", descripcion: "Descripción del Producto 1" },
      { imagen: "images/amplio7.jpg", nombre: "Diseño 9", descripcion: "Descripción del Producto 1" },
      { imagen: "images/amplio8.jpg", nombre: "Diseño 10", descripcion: "Descripción del Producto 1" },
      { imagen: "images/amplio9.jpg", nombre: "Diseño 11", descripcion: "Descripción del Producto 1" },
      { imagen: "images/amplio10.jpg", nombre: "Diseño 12", descripcion: "Descripción del Producto 1" },
      { imagen: "images/amplio11.jpg", nombre: "Diseño 13", descripcion: "Descripción del Producto 1" },
      { imagen: "images/ampleo1.1.jpg", nombre: "Diseño 14", descripcion: "Descripción del Producto 1" },


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
  function highlightSearch() {
    var searchText = document.getElementById('search-input').value.trim().toLowerCase();
    if (searchText === '') return false; // No hacer nada si no hay texto de búsqueda

    clearHighlight(); // Limpiar resaltados anteriores

    var containers = document.querySelectorAll('.container p, .container h2, .container h3, .container a'); // Seleccionar todos los elementos donde buscar
    var found = false;

    containers.forEach(function(container) {
        var html = container.innerHTML;
        var highlightedHtml = html;
        
        // Utilizar expresiones regulares para reemplazar el texto buscado con etiquetas de resaltado
        var regex = new RegExp('(' + searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'gi'); // Escapar caracteres especiales
        highlightedHtml = highlightedHtml.replace(regex, '<span class="highlight">$1</span>');
        
        if (highlightedHtml !== html) {
            container.innerHTML = highlightedHtml;
            found = true;
            // Hacer scroll hacia el elemento encontrado
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return false; // Detener el bucle forEach una vez encontrado el primer resultado
        }
    });

    if (!found) {
        alert('Texto no encontrado');
    }

    return false; // Evitar envío del formulario
}

function clearHighlight() {
    var highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(function(element) {
        element.outerHTML = element.innerHTML; // Eliminar etiquetas de resaltado manteniendo el contenido original
    });
}