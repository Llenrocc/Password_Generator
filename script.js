const characterAmountRange = document.getElementById 
('characterAmountRange')

const characterAmountNumber = document.getElementById 
('characterAmountNumber')

characterAmountNumber.addEventListener('input', syncCharacterAmount)

characterAmountRange.addEventListener('input', syncCharacterAmount)