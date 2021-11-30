const displayContainer = document.getElementById('display');

const displayText = 'Welcome to wonderland!';

const displayParagraph = document.createElement('p');
displayParagraph.className = 'display-text'
displayParagraph.textContent = displayText;

const actionButton = document.getElementById('display-action-button');

actionButton.addEventListener('click', () => {
  if(!displayContainer.hasChildNodes()) {
    displayContainer.appendChild(displayParagraph);
  } else {
    console.warn('Text already displayed!');
  }
});

