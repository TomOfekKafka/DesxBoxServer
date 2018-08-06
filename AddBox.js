var resultEnum = require('./ResultsEnum');
var responseHelper = require('./ResponseSender');
const uuidv1 = require('uuid/v1');



module.exports = function (app, admin, firebase) {
    app.get('/AddBox', (request, response) => {
        var ownerName = request.query.OwnerName;
        var phone = request.query.Phone;
        var latitude = request.query.Latitude;
        var longitude = request.query.Longitude;
        var boxName = request.query.BoxName;

        var boxId = uuidv1();
        var boxData = {};

        var datetime = new Date();
        
        console.log("Saving box to database.");
        firebase.database().ref('/' + boxId).set({
            latitude: latitude,
            longitude: longitude,
            ownerName: ownerName,
            phone: phone,
            boxName: boxName,
            isFull: false,
            address: 'Ibn Gabirol 23',
            fullSince: 'NA',
            lastPickUp: datetime.toString()
        });
 
        return responseHelper.SendResponse(response, resultEnum.ResultEnum.Success, "boxId", boxId);
    });
}