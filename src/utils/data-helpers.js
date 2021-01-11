"use strict";
exports.__esModule = true;
var connection_js_1 = require("../connection.js");
function getData() {
    return connection_js_1.db
        .collection("users")
        .get()
        .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.id + " => " + doc.data());
        });
    });
}
getData();
// export {};
