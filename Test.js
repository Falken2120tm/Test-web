const bodyElement = document.body;

const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextElementSibling;
const parentNode = bodyElement.parentNode;

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);

const textElement = document.querySelector('.anketa-text')
const textElementContent = textElement.innerHTML;

console.log(textElement);

textElement.innerHTML = 'Изменяю текст, зайди в консоль'
textElement.style.color = "red"
