const alertBar = document.querySelector('.alert');
const alertCross = document.querySelector('.alert__close');

const bell = document.querySelector('.user__notification');
const notificationMessageList = document.querySelectorAll(
  '.notifications__item'
);
const notificationCrosses = document.querySelectorAll('.notifications__close');
const newItemsDot = document.querySelector('.user__dot');

// Alert bar
function alertMessageHandler() {
  alertBar.style = 'display: none';
}

alertCross.addEventListener('click', alertMessageHandler);

// Notifications bell
const openMessageHandler = () => {
  notificationMessageList.forEach((item) => {
    item.style = 'display: flex';
  });
  newItemsDot.style = 'display: none';
};

bell.addEventListener('click', openMessageHandler, { once: true });

const notificationsMessageHandler = (event) => {
  const parent = event.target.parentNode;
  parent.style = 'display: none';
};

notificationCrosses.forEach((cross) => {
  return cross.addEventListener('click', notificationsMessageHandler);
});
