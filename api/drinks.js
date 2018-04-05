'use strict';
let drinks = require('./data')

exports.handler = (event, context, callback) => {
    let id = event.pathParameters ? event.pathParameters.id - 1 : null
    switch (event.httpMethod) {

        case "GET":
            if (id != null) {
                callback(null, {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Credentials": "true"
                    },
                    body: JSON.stringify(drinks[id])
                })
                return
            }

            callback(null, {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": "true"
                },
                body: JSON.stringify(drinks)
            });
            break

        default:
            // Send HTTP 501: Not Implemented
            console.log("Error: unsupported HTTP method (" + event.httpMethod + ")")
            callback(null, { statusCode: 501 })
    }
}