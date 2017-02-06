/*this the configularion file to connect to mongoDB serverOptions.
Change the name myDb to your database name

*/
var connectionstring = 'mongodb://localhost:27017/myDb';
exports.serverOptions = {
     'auto_reconnect': true,
     'poolSize': 10
 };
exports.mongoconnectionstring = connectionstring;
