// Reinicializar y actualizar Scrollspy de Bootstrap dinámicamente al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));
    dataSpyList.forEach(function (dataSpyEl) {
        bootstrap.Scrollspy.getInstance(dataSpyEl) || new bootstrap.Scrollspy(dataSpyEl);
    });
});