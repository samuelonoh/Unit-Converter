const toggleSwitch = document.querySelector('#mode-toggle');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let btn = document.getElementById("btn")
let err = document.getElementById("error")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")


btn.addEventListener("click", function() {
userInput = inputEl.value

    if (!isNaN(userInput)) {
            console.log(userInput)

    // Length
    lengthEl.innerHTML = `${userInput} meters = ${(userInput * 3.281).toFixed(2)} feet | ${userInput} feet = ${ (userInput / 3.281).toFixed(3)} meters`

    // Volume
    volumeEl.innerHTML = `${userInput} litres = ${(userInput * 0.264).toFixed(3)} gallons | ${userInput} gallons = ${ (userInput / 0.264).toFixed(3)} meters` 

    // Mass
     massEl.innerHTML = `${userInput} kilo = ${(userInput * 2.204).toFixed(3)} pounds | ${userInput} pounds = ${ (userInput / 2.204).toFixed(3)} kilos` 
    }else {
        err.innerHTML = "Input a number"
        cases()
    }
    
})

function cases() {
    setTimeout(()=> {
            (err.innerHTML = "")
        }, 2000)
        
        lengthEl.innerHTML = "---"
        volumeEl.innerHTML = "---"
        massEl.innerHTML = "---"
}
