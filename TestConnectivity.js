
var resultEnum = require('./ResultsEnum');
var responseHelper = require('./ResponseSender');
var time = require('time');

module.exports = function (app, admin) {
    app.get('/TestConnectivity', (request, response) => {
        console.log("TestConnectivity was called! time " + time.time());
        responseHelper.SendResponse(response, resultEnum.ResultEnum.Success, null, null);
    });
}