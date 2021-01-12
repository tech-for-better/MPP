"use strict";
exports.__esModule = true;
exports.signout = exports.rememberMe = exports.signInWithGoogle = exports.login = exports.signup = void 0;
var connection_1 = require("../connection");
// signup
var signup = function (email, password) {
    return connection_1.auth().createUserWithEmailAndPassword(email, password);
};
exports.signup = signup;
//  login
var login = function (email, password) {
    return connection_1.auth().signInWithEmailAndPassword(email, password);
};
exports.login = login;
//  signinwithgoogle
var signInWithGoogle = function () {
    var provider = new connection_1.auth.GoogleAuthProvider();
    connection_1.auth().signInWithRedirect(provider);
};
exports.signInWithGoogle = signInWithGoogle;
// persistence - remember me
var rememberMe = function () {
    connection_1.auth().setPersistence(connection_1.auth.Auth.Persistence.LOCAL);
};
exports.rememberMe = rememberMe;
// firebase.auth().setPersistence(this.remember.checked ? fireauth.Auth.Persistence.LOCAL : fireauth.Auth.Persistence.SESSION);
//  sign out
var signout = function () {
    connection_1.auth().signOut();
};
exports.signout = signout;
