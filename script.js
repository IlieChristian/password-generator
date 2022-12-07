const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const includeUppercaseElement = document.getElementById('includeUppercase');
const characterAmountNumber = document.getElementById("characterAmount");
const form = document.getElementById('form');
const inputValue = document.getElementById("inputValue");
let passwordEl1 = document.getElementById("password-El1");
let passwordEl2 = document.getElementById("password-El2");
let sw = 0;
let sw2 = 0;

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

// window.addEventListener('load', () => {
//     registerSW();
// });

// async function registerSW() {
//     if ('serviceWorker' in navigator) {
//         try {
//             await navigator.serviceWorker.register('sw.js');
//         } catch (e) {
//             console.log('SW registration failed');
//         }
//     }
// };


form.addEventListener('submit', () => {
    const characterAmount = characterAmountNumber.value;
    const includeNumbers =  includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const includeUppercase = includeUppercaseElement.checked;
    passwordEl1.textContent = generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase);;
    passwordEl2.textContent = generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase);;
    sw2 = 1;
    copyToClip1.dataset.content = 'Click to copy';
    copyToClip2.dataset.content = 'Click to copy';
});

function generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if(includeNumbers) {charCodes = charCodes.concat(NUMBER_CHAR_CODES)};
    if(includeSymbols) {charCodes = charCodes.concat(SYMBOL_CHAR_CODES)};
    if(includeUppercase) {charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)};
    const passwordCharacters = [];
    for(let i = 0 ; i < characterAmount ; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    };
    return passwordCharacters.join('');
};

function arrayFromLowToHigh(low, high) {
    const array = [];
    for(let i = low ; i <= high ; i++) {
        array.push(i);
    }
    return array;
};

let copyToClip1 = document.getElementById("copyTo-Clip1");
let copyToClip2 = document.getElementById("copyTo-Clip2");

copyToClip1.addEventListener('click', async () => {
    if(sw2 !== 0) {    
        try {
            await navigator.clipboard.writeText(passwordEl1.textContent);
            copyToClip1.dataset.content = 'Copied to clipboard!';
        } catch (err) {
            console.error('Failed to copy: ', err);
        };
    };
});

copyToClip2.addEventListener('click', async () => {
    if(sw2 !== 0) {   
        try {
            await navigator.clipboard.writeText(passwordEl2.textContent);
            copyToClip2.dataset.content = 'Copied to clipboard!';
        } catch (err) {
            console.error('Failed to copy: ', err);
        };
    };
});

let changeColor = document.getElementById("changeColor");
var r = document.querySelector(':root');
let color = "green";

let colorHex = {
    green: ["#34D399", "#10B981", "#059669"],
    blue: ["#38BDF8", "#0EA5E9", "#0284C7"],
    purple: ["#A78BFA", "#8B5CF6", "#7C3AED"],
    red: ["#FB7185", "#F43F5E", "#E11D48"],
    yellow: ["#FBBF24", "#F59E0B", "#D97706"]
};

function setDefaultColor() {
    r.style.setProperty('--textalt', colorHex.green[0]);
    r.style.setProperty('--button', colorHex.green[1]);
    r.style.setProperty('--button-hover', colorHex.green[2]);
};

setDefaultColor();

changeColor.addEventListener('click', () => {
    if(color === "green") {
        r.style.setProperty('--textalt', colorHex.blue[0]);
        r.style.setProperty('--button', colorHex.blue[1]);
        r.style.setProperty('--button-hover', colorHex.blue[2]);
        color = "blue";
    } else if(color === "blue") {
        r.style.setProperty('--textalt', colorHex.purple[0]);
        r.style.setProperty('--button', colorHex.purple[1]);
        r.style.setProperty('--button-hover', colorHex.purple[2]);
        color = "purple";
    } else if(color === "purple") {
        r.style.setProperty('--textalt', colorHex.red[0]);
        r.style.setProperty('--button', colorHex.red[1]);
        r.style.setProperty('--button-hover', colorHex.red[2]);
        color = "red";
    } else if(color === "red") {
        r.style.setProperty('--textalt', colorHex.yellow[0]);
        r.style.setProperty('--button', colorHex.yellow[1]);
        r.style.setProperty('--button-hover', colorHex.yellow[2]);
        color = "yellow";
    } else if(color === "yellow") {
        r.style.setProperty('--textalt', colorHex.green[0]);
        r.style.setProperty('--button', colorHex.green[1]);
        r.style.setProperty('--button-hover', colorHex.green[2]);
        color = "green";
    };
});

form.addEventListener = ('submit', e => {
    e.stopImmediatePropagation();
});

characterAmountNumber.oninput = ( () => {
    let value = characterAmountNumber.value
    inputValue.textContent = value;
    inputValue.style.left = "calc(" + ((value - 8) * 4 + 2 + value * 1) + "%";
});

characterAmountNumber.onmousedown = (() => {
    inputValue.classList.add("show");
});

characterAmountNumber.onmouseup = (() => {
    setTimeout(() => {
        inputValue.classList.remove("show");
    }, 600);
});

characterAmountNumber.ontouchstart = (() => {
    inputValue.classList.add("show");
});

characterAmountNumber.ontouchend = (() => {
    setTimeout(() => {
        inputValue.classList.remove("show");
    }, 600);
});