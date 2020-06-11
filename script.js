var characterAmountRange = document.getElementById('characterAmountRange');
var characterAmountNumber = document.getElementById('characterAmountNumber');

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(e) {
    var value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}