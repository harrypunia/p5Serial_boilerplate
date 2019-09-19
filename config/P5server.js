class P5server {
    constructor(port) {
        this.serial = {};
        this.portName = port;
        this.data = 0;
    }

    init = () => {
        this.serial = new p5.SerialPort();
        console.log(this.serial);
        this.serial.on('data', this.fetch);
        this.serial.on('error', this.error);
        this.serial.open(this.portName, {
            baudRate: 9600
        });
    }

    error = err => {
        console.log('Something went wrong with the serial port. ' + err);
    }

    fetch = () => {
        var inString = this.serial.readStringUntil('\r\n');
        if (inString.length > 0) {
            this.data = Number(inString);
        }
    }

    draw = func => {
        const _data = this.data;
        const data = _data.includes(".") ? _data.split(".") : _data;
        func(data);
    }
}
