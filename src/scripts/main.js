document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form-random').addEventListener('submit', function(event) {
        event.preventDefault()

        let maxNumber = document.querySelector('#max-number').value
        maxNumber = parseInt(maxNumber)

        let randomNumber = Math.random() * maxNumber

        randomNumber = Math.floor(randomNumber + 1)

        document.querySelector('#result-value').innerText = randomNumber
        document.querySelector('.result').style.display = 'block'
    })
})