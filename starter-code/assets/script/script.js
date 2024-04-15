// Elements
const slider = document.querySelector('input[type=range]');
const sliderValue = document.querySelector('.value');
const form = document.querySelector('form');
const generateBtn = document.querySelector('button');
const constraints = document.querySelectorAll('input[name=options]');
const output = document.querySelector('.result__text_field');
const passwordState = document.querySelector('.password-strength__state');
const passwordStrength = document.querySelector('.password-strength__indicator div');

// Character sets
const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "£$&()*+[]@#^-_!?"
};

// Update displayed value of slider
slider.addEventListener('input', () => {
    sliderValue.textContent = slider.value;
});

// Generate Password
function generatePassword() {
    let activeCharSet = "";
    let password = "";

    constraints.forEach(checkbox => {
        if (checkbox.checked) {
            activeCharSet += charSets[checkbox.value];
        }
    });

    for (let i = 0; i < slider.value; i++) {
        const randomIndex = Math.floor(Math.random() * activeCharSet.length);
        password += activeCharSet[randomIndex];
    }

    output.value = password;
    updatePasswordStrength(password);
}

// Update Password Strength
function updatePasswordStrength(password) {
    const length = password.length;
    const typesUsed = constraints.reduce((count, checkbox) => count + (checkbox.checked ? 1 : 0), 0);
    const strength = length + typesUsed;

    let strengthLevel = 0;
    if (strength > 15) strengthLevel = 4;
    else if (strength > 10) strengthLevel = 3;
    else if (strength > 5) strengthLevel = 2;
    else strengthLevel = 1;

    passwordState.textContent = ['Weak', 'Moderate', 'Strong', 'Very Strong'][strengthLevel - 1];
    passwordStrength.style.width = `${strengthLevel * 25}%`;
}

// Event listeners
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generatePassword();
});

