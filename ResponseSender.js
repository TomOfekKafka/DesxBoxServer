module.exports = {
    SendResponse: function (response, status) {
        var resultObj = {};
        resultObj['Result'] = status.value;
        for (var i = 2; i < arguments.length; i += 2) {
            if (arguments[i+1]) resultObj[arguments[i]] = arguments[i + 1];
        }
        return response.send(JSON.stringify(resultObj));   
    }

};