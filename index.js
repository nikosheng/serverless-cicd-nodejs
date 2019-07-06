var func = require("./moment.js")

var event = {
    "queryStringParameters": {
        "tz": "Asia/Macau"
    }
}
var ret = func.momentfunc(event)
console.log(ret)