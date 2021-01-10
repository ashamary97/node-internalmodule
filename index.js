const myos=require('os');

var user=myos.userInfo();
console.log(user);

var myplatform=myos.platform();
console.log(myplatform)

var myobject=myos.constants;
console.log(myobject);

var string=myos.EOL;
console.log(string)

var cpus=myos.cpus()
console.log(cpus)

var network=myos.networkInterfaces()
console.log(network)

var release=myos.release()
console.log(release)

