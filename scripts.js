const celsius = document.getElementById("celsius")
const fahrenheit = document.getElementById("fahrenheit")
const kelvin = document.getElementById("kelvin")

const hot = document.getElementById("hot")
const cold = document.getElementById("cold")

celsius.addEventListener("input", calculate)
function calculate() {
	const celsiusTemp = parseFloat(celsius.value)
	const fahrenheitTemp = Math.round((celsiusTemp * 9) / 5) + 32
	const kelvinTemp = Math.round(celsiusTemp + 273.15)
	fahrenheit.textContent = `Fahrenheit: ${fahrenheitTemp}`
	kelvin.textContent = `Kelvin: ${kelvinTemp}`

	const hotHeight = parseFloat(celsiusTemp) * 3.05
	hot.style.height = `${hotHeight}px`

	const coldHeight = parseFloat(celsiusTemp) * -3.05
	cold.style.height = `${coldHeight}px`
}
