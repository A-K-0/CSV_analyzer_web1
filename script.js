var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container= document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}


document.getElementById('fileInput').addEventListener('change', function() {
    // Hide the filter and sidebar sections
    document.querySelector('.filters').style.display = 'none';
    document.querySelector('.sidebar').style.display = 'none';
    document.querySelector('.container').style.display = 'none';

    document.body.style.backgroundColor = 'black';
    document.header.style.backgroundColor = 'black';
});

let csvData = null;
let chart = null;

const fileInput = document.getElementById('fileInput');
const uploadContainer = document.getElementById('uploadContainer');
const mainContent = document.getElementById('mainContent');

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) handleFile(e.target.files[0]);
});

function handleFile(file) {
    Papa.parse(file, {
        complete: function(results) {
            csvData = results.data;
            
            // Switch to main content view
            uploadContainer.classList.add('hidden');
            mainContent.classList.remove('hidden');
            
            // Display file information
            const fileInfo = document.getElementById('fileInfo');
            const headers = csvData[0];
            const rows = csvData.length - 1;
            const columns = headers.length;

            fileInfo.innerHTML = `
                <p style="color: #aaa; margin-top: 12px">
                    ${rows} rows • ${columns} columns • Uploaded just now
                </p>
            `;

            // Populate dropdowns
            const xAxis = document.getElementById('xAxis');
            const yAxis = document.getElementById('yAxis');
            xAxis.innerHTML = '';
            yAxis.innerHTML = '';

            headers.forEach(header => {
                xAxis.add(new Option(header, header));
                yAxis.add(new Option(header, header));
            });

            // Initialize chart
            updateChart();
        }
    });
}

function updateChart() {
    const xAxis = document.getElementById('xAxis').value;
    const yAxis = document.getElementById('yAxis').value;
    const chartType = document.getElementById('chartType').value;
    const lineColor = document.getElementById('lineColor').value;
    const pointStyle = document.getElementById('pointStyle').value;

    const xIndex = csvData[0].indexOf(xAxis);
    const yIndex = csvData[0].indexOf(yAxis);

    const data = csvData.slice(1).map(row => ({
        x: row[xIndex],
        y: row[yIndex]
    }));

    if (chart) {
        chart.destroy();
    }

    const ctx = document.getElementById('dataChart').getContext('2d');
    chart = new Chart(ctx, {
        type: chartType,
        data: {
            datasets: [{
                label: `${yAxis} vs ${xAxis}`,
                data: data,
                backgroundColor: lineColor,
                borderColor: lineColor,
                pointStyle: pointStyle,
                pointRadius: 5,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: xAxis,
                        color: '#fff'
                    },
                    grid: {
                        color: '#333'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: yAxis,
                        color: '#fff'
                    },
                    grid: {
                        color: '#333'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#fff'
                    }
                }
            }
        }
    });

    // Update chart title
    document.getElementById('chartTitle').textContent = `${yAxis} vs ${xAxis} Analysis`;
}