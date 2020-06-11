const characterAmountRange = document.getElementById 
('characterAmountRange')
const characterAmountNumber = document.getElementById 
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('generatePassword')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includSymbols = includeSymbolsElement.checked

    const password = generatePassword(characterAmount, includeUppercase,
    includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeUppercase, includeNumbers,
    includeSymbols) {
        String.fromCharCode(65)
}

function arrayFromLowtoHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
    array.push
}
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

