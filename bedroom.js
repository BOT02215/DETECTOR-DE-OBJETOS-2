modelStatus = false

function setup() {
    canvas = createCanvas(600, 400)
    canvas.center()

    objectDetected = ml5.objectDetector("cocossd", modelLoaded)
}

function modelLoaded() {
    console.log("Modelo Carregado")
    modelStatus = true
    
    objectDetected.detect(bedroomImage, gotResult)
}

function preload() {
    bedroomImage = loadImage("bedroom.jpg")
}

object = []
function gotResult(error, result) {
    if(error) {
        console.log(error)
    }
    else {
        console.log(result)
        object = result
    }
}