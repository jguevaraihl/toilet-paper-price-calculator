document.getElementById('toiletPaperForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera predeterminada

    // Obtiene los valores del formulario
    var brand = document.getElementById('brand').value;
    var price = parseFloat(document.getElementById('price').value);
    var rolls = parseFloat(document.getElementById('rolls').value);
    var meters = parseFloat(document.getElementById('meters').value);

    // Calcula el precio por metro
    var pricePerMeter = (price / (rolls * meters)).toFixed(2);

    // Crea una nueva fila para la tabla
    var row = document.createElement('tr');
    row.innerHTML = '<td>' + (brand ? brand : 'N/A') + '</td><td>' + price + '</td><td>' + rolls + '</td><td>' + meters + '</td><td>' + pricePerMeter + '</td>';

    // Agrega la nueva fila a la tabla
    document.getElementById('resultsTable').querySelector('tbody').appendChild(row);
});

document.getElementById('clearTable').addEventListener('click', function() {
    // Borra todas las filas de la tabla
    document.getElementById('resultsTable').querySelector('tbody').innerHTML = '';
});
