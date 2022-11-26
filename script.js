const characters =
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
"#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".",
"?","/"];

const passwordNumber = 15;
let passwordEl1 = document.getElementById("password-El1");
let passwordEl2 = document.getElementById("password-El2");
let btn = document.getElementById("generate");
let password = "";
let sw = 0


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
});

function getRandomNumber() {
    return Math.floor(Math.random() * characters.length);
};