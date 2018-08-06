var resultEnum = require('./ResultsEnum');
var responseHelper = require('./ResponseSender');

module.exports = function (app, admin, firebase) {
    app.get('/RemoveBox', (request, response) => {
        var uid = request.query.Uid;
        
        var db = firebase.database();
        var ref = db.ref('/');


        console.log("Deleting Box");
        ref.set({
            latitude: latitude,
            longitude: longitude,
            ownerName: ownerName,
            phone: phone,
            boxName: boxName,
            isFull: false,
            lastPickUp: datetime.toString()
        });
 
        return responseHelper.SendResponse(response, resultEnum.ResultEnum.Success, "boxId", boxId);
    });
}