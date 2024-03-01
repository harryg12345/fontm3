noseX = ""
noseY = ""
leftwristx = "";
rightwristx = "";
difference = "";
function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
    canvas = createCanvas(550, 500)
    canvas.position(1000, 150)
    video.position(noseX, noseY)
poseNet = ml5.poseNet(video,modelLoaded)
}
function draw() {
    background(70, 98, 67)
    fill("purple")
    stroke("yellow")
    textSize(difference)
    text('Harrison', noseX, noseY)
}

function modelLoaded() {
    console.log('model has loaded successfully')
    poseNet.on("pose", gotPoses)
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y

        leftwristx = results[0].pose.leftWrist.x
        rightwristx = results[0].pose.rightWrist.x
        difference = floor(leftwristx - rightwristx)
        document.getElementById("fsize").innerHTML = "the size of the font is " + difference + " pixels";
    }
}
