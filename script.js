var lowestPricePerMeter = Infinity;
var lowestPriceRow = null;

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Precio por Metro',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

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

    // Si este precio por metro es el más bajo hasta ahora, cambia el color de la fila a verde
    if (pricePerMeter < lowestPricePerMeter) {
        if (lowestPriceRow) {
            lowestPriceRow.style.backgroundColor = ''; // Restablece el color de la fila anterior más baja
        }
        lowestPricePerMeter = pricePerMeter;
        lowestPriceRow = row;
        row.style.backgroundColor = 'lightgreen'; // Cambia el color de la nueva fila más baja a verde
    }

    // Agrega la nueva marca y el precio por metro al gráfico
    chart.data.labels.push(brand ? brand : 'N/A');
    chart.data.datasets[0].data.push(pricePerMeter);
    chart.update();
});

document.getElementById('clearTable').addEventListener('click', function(event) {
    // Borra todas las filas de la tabla
    document.getElementById('resultsTable').querySelector('tbody').innerHTML = '';
    // Restablece el precio más bajo por metro y la fila correspondiente
    lowestPricePerMeter = Infinity;
    lowestPriceRow = null;

    // Borra todos los datos del gráfico
    chart.data.labels = [];
    chart.data.datasets[0].data = [];
    chart.update();
});
