const input = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('div');

const addElement = (event) => {
  let textValue = event.target.value;
  console.log(textValue);
}

input.addEventListener('input', addElement)