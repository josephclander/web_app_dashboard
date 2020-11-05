const alertBar = document.querySelector('.alert');
const alertCross = document.querySelector('.alert__close');

function alertMessageHandler() {
  alertBar.style = 'display: none';
}

alertCross.addEventListener('click', alertMessageHandler);
