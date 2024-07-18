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
    console.log(inputEl.value)
    
    // Length
    lengthEl.innerHTML = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(2)} feet | ${inputEl.value} feet = ${ (inputEl.value / 3.281).toFixed(3)} meters`

    // Volume
    volumeEl.innerHTML = `${inputEl.value} litres = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${ (inputEl.value / 0.264).toFixed(3)} meters` 

    // Mass
     massEl.innerHTML = `${inputEl.value} kilo = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${ (inputEl.value / 2.204).toFixed(3)} kilos` 
})