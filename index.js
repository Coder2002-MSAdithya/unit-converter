const conversionValueElement = document.getElementById("conv-value")
let conversionValue = 0

conversionValueElement.textContent = conversionValue

const meterToFootFactor = 3.28084
const footToMeterFactor = 1 / meterToFootFactor

const litreToGallonFactor = 0.264172
const gallonToLitreFactor = 1 / litreToGallonFactor

const kiloToPoundFactor = 2.20462
const poundToKiloFactor = 1 / kiloToPoundFactor

function convLength()
{
    const meters = document.getElementById("meters")
    const inFeet = document.getElementById("in-feet")
    
    const feet = document.getElementById("feet")
    const inMeters = document.getElementById("in-meters")
    
    meters.textContent = conversionValue
    inFeet.textContent = (conversionValue * meterToFootFactor).toFixed(3)
    
    feet.textContent = conversionValue
    inMeters.textContent = (conversionValue * footToMeterFactor).toFixed(3)
}

function convVolume()
{
    const liters = document.getElementById("liters")
    const inGallons = document.getElementById("in-gallons")
    
    const gallons = document.getElementById("gallons")
    const inLiters = document.getElementById("in-liters")
    
    liters.textContent = conversionValue
    inGallons.textContent = (conversionValue * litreToGallonFactor).toFixed(3)
    
    gallons.textContent = conversionValue
    inLiters.textContent = (conversionValue * gallonToLitreFactor).toFixed(3)
}

function convMass()
{
    const kilos = document.getElementById("kilos")
    const inPounds = document.getElementById("in-pounds")
    
    const pounds = document.getElementById("pounds")
    const inKilos = document.getElementById("in-kilos")
    
    kilos.textContent = conversionValue
    inPounds.textContent = (conversionValue * kiloToPoundFactor).toFixed(3)
    
    pounds.textContent = conversionValue
    inKilos.textContent = (conversionValue * poundToKiloFactor).toFixed(3)
}

function performConversions()
{
    convLength()
    convVolume()
    convMass() 
}

function handleInput()
{
    conversionValue = +conversionValueElement.textContent
    performConversions()
}

conversionValueElement.addEventListener("input", handleInput, false)
