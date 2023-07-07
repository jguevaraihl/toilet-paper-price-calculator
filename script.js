document.getElementById('toiletPaperForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada

    // Obtiene los valores del formulario
    var brand = document.getElementById('brand').value;
    var price = parseFloat(document.getElementById('price').value);
    var rolls = parseFloat(document.getElementById('rolls').value);
    var meters = parseFloat(document.getElementById('meters').value);

    // Calcula el precio por metro
    var pricePerMeter = (price / (rolls * meters)).toFixed(2);

    // Muestra el resultado
    document.getElementById('result').innerHTML = 'El precio por metro de ' + (brand ? brand : 'la marca ingresada') + ' es ' + pricePerMeter + '.';
});
