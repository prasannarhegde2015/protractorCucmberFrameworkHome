let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
global.expect = chai.expect;
var configure = function () {
    this.setDefaultTimeout(60 * 1000);
};

module.exports = configure;
