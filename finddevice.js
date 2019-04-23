const bt = require('node-bluetooth')

const device = new bt.DeviceINQ()

device
.on('finished',  console.log.bind(console, 'finished'))
.on('found', function found(address, name){
  console.log('Found: ' + address + ' with name ' + name);
}).scan();

device.listPairedDevices(console.log);