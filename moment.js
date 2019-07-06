const moment = require('moment-timezone');

exports.momentfunc = function(event) {
    let tz = 'Asia/Macau';
  
    if (event.queryStringParameters && event.queryStringParameters.tz) {
        tz = event.queryStringParameters.tz;
        
        if (!moment.tz.names().includes(tz)) {
            return {
                    statusCode: '400',
                    body: `Unknown timezone ${tz}`
                };
        }
    }
    
    return {
        statusCode: '200',
        body: `The time in ${tz} is: ${moment.tz(tz).format()}`
    };
}