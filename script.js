const input = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('div');

const items = [];

const addElement = (event) => {
  event.preventDefault();
  let textValue = input.value

  if (textValue.length) {
    for (item of items) {
      if (item === textValue) {
        alert('Item already on the list!');
        return;
      }
    }
    items.push(textValue);
    div.textContent += textValue + ', ';
  }
  input.value = '';
};

btn.addEventListener('click', addElement);