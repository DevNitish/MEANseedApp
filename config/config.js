/*this the configularion file to connect to mongoDB serverOptions.
Change the name myDb to your database name

*/
var connectionstring = 'mongodb://localhost:27017/myDb';//Change myDb to yourDBname
exports.serverOptions = {
     'auto_reconnect': true,
     'poolSize': 10
 };
//var connectionstring = "mongodb://nearu:nearu@ds051843.mongolab.com:51843/ultivoz";
exports.mongoconnectionstring = connectionstring;
