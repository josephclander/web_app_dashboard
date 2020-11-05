// Message widget scripts

const sendButton = document.querySelector('.messages__btn');
const messageBox = document.querySelector('#messages__alert-window');

const submitMessageHandler = (event) => {
  event.preventDefault();
  messageBox.innerText = 'Message Sent';
  messageBox.classList.add('messages__alert-window--show');
  setInterval(() => {
    messageBox.classList.remove('messages__alert-window--show');
  }, 2000);
};

sendButton.addEventListener('click', submitMessageHandler);
