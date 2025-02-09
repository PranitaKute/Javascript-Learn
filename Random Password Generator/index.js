// Password Generator

function generatePassword(passwordLength,includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    
    const lowerChar = "abcdefghijklmnopkrstuvwxyz";
    const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbol = "!@#$%^&*()_+-=";

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowerCase ? lowerChar : "";
    allowedChar += includeUpperCase ? upperChar : "";
    allowedChar += includeNumbers ? numbers : "";
    allowedChar += includeSymbols ? symbol : "";

    console.log(allowedChar);

    if(passwordLength <= 0){
        return `(Password lenght must be atleast 5)`;
    }

    if(allowedChar.length === 0){
        return `(Atleast ! set of character needs to be selected)`;
    }

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random()*allowedChar.length);
        password += allowedChar[randomIndex];
    }
    

    return password;
}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Generated Password : ${password}`);