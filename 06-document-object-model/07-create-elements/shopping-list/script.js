const div = document.createElement('div');
const container = document.querySelector('.container');
div.classList = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');
div.setAttribute('style', 'font-weight:bold;color:green;margin:20px auto;')

// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');

div.appendChild(text);
container.appendChild(div);

console.log(div);
