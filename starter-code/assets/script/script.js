// Elements
const slider = document.querySelector('input[type=range]');
const sliderValue = document.querySelector('.value');
const form = document.querySelector('form');
const generateBtn = document.querySelector('button');
const constraints = document.querySelectorAll('input[name=options]');
const output = document.querySelector('.result__text-field');
const copyIcon = document.querySelector('.password-generator__result > img');
const copyText = document.querySelector('.copied');
const passwordState = document.querySelector('.password-strength__state');
const passwordStrength = document.getElementById('password-strength');

// Character sets
const charSets = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "£$&()*+[]@#^-_!?"
};
