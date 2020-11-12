var barElement = document.getElementById('bar-chart');
var donutElement = document.getElementById('donut-chart');
var lineElement = document.getElementById('line-chart');

// Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.events = []; // show hover effects on NO events

/**************************************
BAR-CHART
**************************************/

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

/**************************************
DONUT-CHART
**************************************/

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

/**************************************
LINE-CHART DATA CHANGES 
**************************************/

const hourlyData = {
  labels: [
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ],
  data: [2, 5, 5, 15, 8, 20, 3, 9, 15, 16],
};

const dailyData = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
  ],
  data: [140, 150, 125, 95, 178, 58, 103, 98, 148, 67],
};

const weeklyData = {
  labels: [
    'week 5',
    'week 6',
    'week 7',
    'week 8',
    'week 9',
    'week 10',
    'week 11',
    'week 12',
    'week 13',
    'week 14',
  ],
  data: [500, 1200, 800, 1000, 1350, 1100, 1000, 1500, 1250, 1400],
};

const monthlyData = {
  labels: [
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
  ],
  data: [2300, 5000, 3530, 1395, 1780, 4520, 2404, 3746, 2097, 3006],
};

let selectedData = weeklyData;
const chartSelectors = document.querySelectorAll('.line-chart__list-item a');

function clickHandler(event) {
  switch (event.target.id) {
    case 'hourlyData':
      selectedData = hourlyData;
      break;
    case 'dailyData':
      selectedData = dailyData;
      break;
    case 'weeklyData':
      selectedData = weeklyData;
      break;
    case 'monthlyData':
      selectedData = monthlyData;
      break;
    default:
      selectedData = weeklyData;
  }
  createLineChart();
  chartSelectors.forEach((chart) => {
    return chart.classList.remove('line-chart__list-item--selected');
  });
  event.target.classList.add('line-chart__list-item--selected');
}

chartSelectors.forEach((selection) => {
  selection.addEventListener('click', clickHandler);
});

/**************************************
LINE-CHART
**************************************/

const createLineChart = () =>
  new Chart(lineElement, {
    type: 'line',
    data: {
      labels: selectedData.labels,
      datasets: [
        {
          data: selectedData.data,
          lineTension: 0,
          backgroundColor: 'rgba(116, 119, 191, 0.3)',
          borderColor: 'rgb(116, 119, 191)',
          borderWidth: 1,
          pointRadius: 5,
          pointBackgroundColor: '#fff',
          pointBorderColor: 'rgb(116, 119, 191)',
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
              padding: 15,
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

createLineChart();
