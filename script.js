var characterAmountRange = document.getElementById('characterAmountRange');
var characterAmountNumber = document.getElementById('characterAmountNumber');
var form = document.getElementById('generatePasswordForm');

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);


form.addEventListener('submit', e  => {
    e.preventDefault()
    var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
});

function syncCharacterAmount(e) {
    var value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}
