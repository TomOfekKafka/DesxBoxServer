var resultEnum = require('./ResultsEnum');
var responseHelper = require('./ResponseSender');



module.exports = function (app, admin, firebase) {
    app.get('/GetAllBoxes', (request, response) => {
        console.log("Getting from database.");
        var db = firebase.database();
        var ref = db.ref('/');
        ref.on("value", function(snapshot) {
            snapshot.forEach(function(element) {
               console.log("element is " +  element); 
            });
            return responseHelper.SendResponse(response, resultEnum.ResultEnum.Success, "Boxes", snapshot);
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
        });
    });
}