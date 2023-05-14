function editarImagen(idimagen) {
    var nuevaSrc = prompt("Introduce la nueva URL de la imagen:");
    if (nuevaSrc != null && nuevaSrc != "") {
      document.getElementById(idimagen).src = nuevaSrc;
    }
  }
    function confirmarEliminarSeccion(boton) {
        var seccion = boton.parentNode;
        var confirmar = confirm("¿Está seguro que desea eliminar esta sección?");
        if (confirmar) {
          seccion.parentNode.removeChild(seccion);
        }
      }
      function Eliminartitulo(idTitulo) {
        var seccionAEliminar = document.getElementById(idTitulo);
        if (confirm("¿Estás seguro de que quieres eliminar este titulo?")) {
          seccionAEliminar.remove();;
        }
      }
        
        function editarParrafo(idParrafo) {
            const nuevoTexto = prompt('Ingrese el nuevo texto:');
            if (nuevoTexto !== null) {
              const parrafo = document.getElementById(idParrafo);
              parrafo.textContent = nuevoTexto;
            }
          }
          function editartitulos(idTitulo) {
            const nuevoTexto = prompt('Ingrese el nuevo titulo:');
            if (nuevoTexto !== null) {
              const titulo = document.getElementById(idTitulo);
              titulo.textContent = nuevoTexto;
            }
          }
          function editarfechai(idestudioi) {
            const nuevoTexto = prompt('Ingrese "Fecha de inicio : (nueva fecha)"');
            if (nuevoTexto !== null) {
              const estudioi = document.getElementById(idestudioi);
              estudioi.textContent = nuevoTexto;
            }
          }
          function editarfechaf(idestudiof) {
            const nuevoTexto = prompt('Ingrese "Fecha de finalización : (nueva fecha)"');
            if (nuevoTexto !== null) {
              const estudiof = document.getElementById(idestudiof);
              estudiof.textContent = nuevoTexto;
            }
          }
          