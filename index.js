/*
1 meter = 3,281 feet
1 litter = 0.264 gallon
1 kilogram = 2,204 pound

 */

const inputEl = document.getElementById("input-El")
const convertBtn = document.getElementById("convertBtn")
const lengthEl = document.getElementById("length-El")
const volumeEl = document.getElementById("volume-El")
const massEl = document.getElementById("mass-El")

convertBtn.addEventListener("click", function(){
  let inputValue = Number(inputEl.value)

  renderlength(inputValue)
  renderVolume(inputValue)
  renderMass(inputValue)


})

function renderlength(value){
  const meterToFeet = value * 3.28084
  const feetToMeter = value * 0.3048
  
  lengthEl.innerHTML = `${value} meters = ${meterToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeter.toFixed(3)} meters`

}

function renderVolume(value){

  const literToGallon = value * 0.264172
  const gallonToLiter = value * 3.78541
  volumeEl.innerHTML = `${value} liters = ${literToGallon.toFixed(3)} | ${value} gallons = ${gallonToLiter.toFixed(3)} liters`

}

function renderMass(value){
  const kiloToPound = value * 2.20462
  const poundToKilo = value * 0.453592

  massEl.innerHTML = `${value} kilos = ${kiloToPound.toFixed(3)} | ${value} pound = ${poundToKilo.toFixed(3)} kilos`

}