var button = document.querySelector('button') as HTMLButtonElement
var num1 = document.getElementById('num1') as HTMLInputElement;
var num2 = document.getElementById('num2') as HTMLInputElement;

function addNumber(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener('click', function() {
  console.log(addNumber(+num1.value, +num2.value))
})