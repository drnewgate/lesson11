'use strict';
const btn = document.getElementById('btn')
const eBtn = document.getElementById('e_btn')
const square = document.getElementById('square')
const circle = document.getElementById('circle')
const rangeInput = document.getElementById('range')
const span = document.querySelector('range-span')
const textInput = document.getElementById('text')


const newColor = function() {
  square.style.backgroundColor = textInput.value 
}

btn.addEventListener('click', newColor)
eBtn.style.display = 'none'

rangeInput.addEventListener('input', function() {
  circle.style.height = rangeInput.value + "%"
  circle.style.width = rangeInput.value + "%"
})