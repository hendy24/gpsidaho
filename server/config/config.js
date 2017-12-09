var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://gps:AqBA2}MMVNiB8k6k@ds255715.mlab.com:55715/gpsidaho-dev',
        port: process.env.PORT || 3000
    }
}
