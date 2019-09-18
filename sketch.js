const server = new P5server('/dev/cu.usbmodem143101');

function setup() {
    createCanvas(windowWidth, windowHeight);
    server.init();
}

function draw() {
    server.draw(data => {
        background(data, 0, 0);
    })
}