const g = require('logitech-g29')
const bt = require('node-bluetooth')

const device = new bt.DeviceINQ();

g.connect(function(err) {
    g.on('pedals-gas', function(val) {
        g.leds(val)
    })
})

device.listPairedDevices(console.log)