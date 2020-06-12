var characterAmountRange = document.getElementById 
('characterAmountRange');
var characterAmountNumber = document.getElementById 
('characterAmountNumber');
var includeUppercaseElement = document.getElementById
('includeUppercase');
var includeNumbersElement = document.getElementById('includeNumbers');
var includeSymbolsElement = document.getElementById('includeSymbols');
var form = document.getElementById('generatePassword');
var passwordDisplay = document.getElementById('passwordDisplay');

var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowtoHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

form.addEventListener('submit', e => {
    e.preventDefault()
    var characterAmount = characterAmountNumber.value
    var includeUppercase = includeUppercaseElement.checked
    var includeNumbers = includeNumbersElement.checked
    var includSymbols = includeSymbolsElement.checked

    var password = generatePassword(characterAmount, includeUppercase,
    includeNumbers, includeSymbols)
    passwordDisplay.innerText = password

})

function generatePassword(characterAmount, includeUppercase, includeNumbers,
    includeSymbols) {
        let charChodes = LOWERCASE_CHAR_CODES
        if (includeUppercase) chardChodes = charChodes.concat
        (UPPERCASE_CHAR_CODES)
        if (includeSymbols) charCodes = charCodes.concat
        (SYMBOL_CHAR_CODES)
        if (includeNumbers) charCodes = charCodes.concat
        (NUMBER_CHAR_CODES)

        for (let i = 0; i < characterAmount; i++) {
            var characterCode = charCodes[Math.floor(Math.random() *
            charCodes.length)]
            passwordCharacters.push(String.fromCharCode(characterCode))
        }
        return password.Characters.join()
        }


function arrayFromLowtoHigh(low, high) {
    var array = []
    for (let i = low; i <= high; i++) {
    array.push
}
    return array
}

function syncCharacterAmount(e) {
    var value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}