const characterAmountRange = document.getElementById 
('characterAmountRange')

const characterAmountNumber = document.getElementById 
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const form = document.getElementById('generatePassword')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const password = generatePassword(characterAmount, includeUppercase,
    includeNumbers, includeSymbols)
})

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

