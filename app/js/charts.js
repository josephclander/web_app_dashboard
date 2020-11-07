var barElement = document.getElementById('bar-chart');
var donutElement = document.getElementById('donut-chart');

// Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.events = []; // show hover effects on NO events

var barChart = new Chart(barElement, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        barThickness: 25,
        data: [75, 100, 175, 125, 225, 200, 100],
        backgroundColor: [
          '#7477bf',
          '#7477bf',
          '#7477bf',
          '#7477bf',
          '#7477bf',
          '#7477bf',
          '#7477bf',
        ],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: '#b2b2b2',
            padding: 10,
          },
          gridLines: {
            drawTicks: false,
            zeroLineColor: 'rgba(0, 0, 0, 0.1)',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#b2b2b2',
            padding: 10,
          },
          gridLines: {
            drawTicks: false,
            zeroLineColor: 'rgba(0, 0, 0, 0.1)',
          },
        },
      ],
    },
  },
});

var donutChart = new Chart(donutElement, {
  type: 'doughnut',
  data: {
    labels: ['Desktops', 'Tablets', 'Phones'],
    datasets: [
      {
        data: [68, 17, 15],
        backgroundColor: ['#7477bf', '#81c98f', '#74b1bf'],
        borderWidth: [0, 0, 0],
      },
    ],
  },
  options: {
    rotation: 0,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 15,
        fontSize: 14,
        fontFamily: "'Open Sans', sans-serif",
        fontColor: '#686767',
      },
    },
  },
});
