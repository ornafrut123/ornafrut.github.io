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