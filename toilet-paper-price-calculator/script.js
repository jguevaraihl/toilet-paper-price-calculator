document.getElementById('toiletPaperForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada

    // Obtiene los valores del formulario
    var brand = document.getElementById('brand').value;
    var price = document.getElementById('price').value;
    var rolls = document.getElementById('rolls').value;
    var meters = document.getElementById('meters').value;

    // Calcula el precio por metro
    var pricePerMeter = (price / (rolls * meters)).toFixed(2);

    // Muestra el resultado
    document.getElementById('result').innerHTML = 'El precio por metro de ' + (brand ? brand : 'la marca ingresada') + ' es ' + pricePerMeter + '.';
});
