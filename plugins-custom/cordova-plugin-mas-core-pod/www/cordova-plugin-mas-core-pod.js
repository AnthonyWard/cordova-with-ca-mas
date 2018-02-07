var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'cordova-plugin-mas-core-pod', 'coolMethod', [arg0]);
};
