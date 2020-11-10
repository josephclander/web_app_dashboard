// Test for local storage
function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

window.onload = function () {
  if (supportsLocalStorage()) {
    const emailInput = document.querySelector('#email');
    const publicInput = document.querySelector('#public');
    const timeZoneInput = document.querySelector('#time-zone');

    // EMAIL INPUT
    // note that localStorage stores information as a string
    localStorage.getItem('emailChecked') === 'true'
      ? (emailInput.checked = true)
      : (emailInput.checked = false);
    emailInput.addEventListener('change', () => {
      localStorage.emailChecked = emailInput.checked;
    });

    // PUBLIC INPUT
    localStorage.getItem('publicChecked') === 'true'
      ? (publicInput.checked = true)
      : (publicInput.checked = false);
    publicInput.addEventListener('change', () => {
      localStorage.publicChecked = publicInput.checked;
    });

    // TIMEZONE SELECT
    const parsedTimeIndex = parseInt(localStorage.getItem('timeZoneSelection'));
    // check to see if value is a number
    if (typeof parsedTimeIndex === 'number') {
      timeZoneInput.selectedIndex = parseInt(localStorage.timeZoneSelection);
    }
    timeZoneInput.addEventListener('change', () => {
      localStorage.timeZoneSelection = timeZoneInput.selectedIndex;
    });
  }
};
