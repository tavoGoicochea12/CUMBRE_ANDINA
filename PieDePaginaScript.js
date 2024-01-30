document.addEventListener("DOMContentLoaded", function() {
    var piePagina = document.getElementById("pie-pagina");
    
    window.addEventListener("scroll", function() {
        // Verifica si se ha llegado al final de la página
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            piePagina.style.display = "block";
        } else {
            piePagina.style.display = "none";
        }
    });
});
