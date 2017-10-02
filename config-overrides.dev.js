const path = require('path');

module.exports = function(config) {

let nodeLoader = config.node;
nodeLoader.readline = 'empty'
nodeLoader.dns = "empty"

}
