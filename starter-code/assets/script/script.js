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

// Initializing character length value
sliderValue.textContent = slider.value;

// Event listener for slider change
form.addEventListener('input', () => {
  sliderValue.textContent = slider.value;
});

// Function to generate password based on chosen options
const generatePassword = () => {
  const passwordOptions = [];
  constraints.forEach(option => {
    if (option.checked && charSets[option.value]) {
      passwordOptions.push(charSets[option.value]);
    }
  });

  const passwordLength = slider.value;
  let password = "";

  if (passwordOptions.length === 0) return "";

  for (let i = 0; i < passwordLength; i++) {
    const randomCategoryIndex = Math.floor(Math.random() * passwordOptions.length);
    const category = passwordOptions[randomCategoryIndex];
    const randomCharIndex = Math.floor(Math.random() * category.length);
    const char = category[randomCharIndex];
    password += char;
  }

  output.value = password;
  return password;
};

// Function to estimate password strength
const estimateStrength = (password) => {
  const result = zxcvbn(password);
  passwordState.textContent = result.feedback.suggestions.join(' ');
  passwordStrength.className = `strength-${result.score}`;
};

// Event listener for Generate button click
generateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const password = generatePassword();
  if (password) estimateStrength(password);
});


// Event listener for Copy button click
copyIcon.addEventListener('click', copyToClipboard);
