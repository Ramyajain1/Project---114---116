noseX = 0;
noseY = 0;

function preload() {
    mushtache = loadImage("https://i.postimg.cc/jqz9yPbP/Mustache.png")
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 43;
        noseY = results[0].pose.nose.y - 15;
        console.log("noseX = " + noseX);
        console.log("noseY = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 400, 300);
    image(mushtache, noseX, noseY, 80, 80);
}

function take_snapshot() {
    save("myFilterImage.png");
}