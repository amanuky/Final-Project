var ctxBar = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Հաճախորդ',
            data: [50, 150, 500, 800],
            backgroundColor: 'rgb(52, 76, 111)', 
            borderColor: '#34495E', 
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});

var ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
var doughnutChart = new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
        labels: ['2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Հաճախորդ',
            data: [50, 150, 500, 800],
            backgroundColor: [
                
                'rgb(203, 0, 128)',
                'rgb(239, 232, 0)',
                'rgb(103, 170, 192)',
                'rgb(52, 76, 111)'
            ],
            borderColor: [
                
                'rgb(203, 0, 128)',
                'rgb(239, 232, 0)',
                'rgb(103, 170, 192)',
                'rgb(52, 76, 111)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});

var ctxPie = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Մագլցում՝ բնական պայմաններում', 'Մագլցում՝ արհեստական պատի վրա', 'Արշավներ', 'Քվեստներ'],
        datasets: [{
            label: 'Revenue',
            data: [300, 500, 100, 200],
            backgroundColor: [
                
                'rgb(203, 0, 128)',
                'rgb(239, 232, 0)',
                'rgb(103, 170, 192)',
                'rgb(52, 76, 111)'
            ],
            borderColor: [
                
                'rgb(203, 0, 128)',
                'rgb(239, 232, 0)',
                'rgb(103, 170, 192)',
                'rgb(52, 76, 111)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});