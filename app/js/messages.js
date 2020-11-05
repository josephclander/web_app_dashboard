// Message widget scripts

const messageBox = document.querySelector('#messages__alert-window');
const userSearch = document.querySelector('#messages__search');
// const sendButton = document.querySelector('.messages__btn');
const messageForm = document.querySelector('#messagesForm');

const submitMessageHandler = (event) => {
  event.preventDefault();
  const info = messageForm.elements;
  let userNameInput = info[0].value;
  let userMessageInput = info[1].value;

  if (userNameInput.length === 0 || userMessageInput.length === 0) {
    messageBox.innerText = 'Please enter name and message';
  } else {
    messageBox.innerText = 'Message Sent';
    messageForm.reset();
    // console.log(userNameInput, userMessageInput);
  }

  messageBox.classList.add('messages__alert-window--show');
  setInterval(() => {
    messageBox.classList.remove('messages__alert-window--show');
  }, 2000);
};

// sendButton.addEventListener('click', submitMessageHandler);

messageForm.addEventListener('submit', submitMessageHandler);
