const characters =
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
"#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".",
"?","/"];

const passwordNumber = 25;
let passwordEl1 = document.getElementById("password-El1");
let passwordEl2 = document.getElementById("password-El2");
let btn = document.getElementById("generate");
let password = "";
let sw = 0;
let sw2 = 0;


btn.addEventListener('click', () => {
    for(let i = 0 ; i < passwordNumber * 2 ; i++) {
        password += characters[getRandomNumber()];
        if(password.length === passwordNumber){
            if(sw === 0){
                passwordEl1.textContent = password;
                sw++;
            } else {
                passwordEl2.textContent = password;
            };
            password = "";
        };
    };
    sw = 0;
    sw2 = 1;
    copyToClip1.dataset.content = 'Click to copy';
    copyToClip2.dataset.content = 'Click to copy';
});

function getRandomNumber() {
    return Math.floor(Math.random() * characters.length);
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

const inputRange = document.getElementById("inputRange");
const inputValue = document.getElementById("inputValue");
inputRange.oninput = ( () => {
    var value = inputRange.value
    inputValue.textContent = value;
    inputValue.style.left = "calc(" + ((value - 8) * 4 + 2 + value * 1) + "%";
});

inputRange.onmousedown = (() => {
    inputValue.classList.add("show");
})

inputRange.onmouseup = (() => {
    inputValue.classList.remove("show");
})
