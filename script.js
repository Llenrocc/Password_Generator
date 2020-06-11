var characterAmountRange = document.getElementById('characterAmountRange');
var characterAmountNumber = document.getElementById('characterAmountNumber');
var includeUppercaseElement = document.getElementById('includeUppercase');
var includeNumbersElement = document.getElementById('includeNumbers');
var includeSymbolsElement = document.getElementById('includeSymbols');
var form = document.getElementById('generatePasswordForm');

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);



form.addEventListener('submit', e  => {
    e.preventDefault();
    var characterAmount = characterAmountNumber.value;
    var includeUppercase = includeUppercaseElement.checked;
    var includeNumbers = includeNumbersElement.checked;
    var includeSymbols = includeSymbolsElement.checked;
    var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
});

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    String.fromCharCode(65);
}

function arrayFromLowToHigh(low, high) {
    var array = []
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e) {
    var value = e.target.value
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}
