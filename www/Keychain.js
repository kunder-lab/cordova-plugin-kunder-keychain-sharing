/*global module, cordova */
'use strict';
module.exports = (function() {

  var _initWithKey = function(encryptionKey, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'KeychainPlugin', 'initWithKey', [encryptionKey]);
  };

  var _addAccount = function(userName, password, accountType, group, userData, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'KeychainPlugin', 'addAccount', [userName, password, accountType, group, userData]);
  };

  var _removeAccount = function(accountType, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'KeychainPlugin', 'removeAccount', [accountType]);
  };

  var _getUserAccount = function(accountType, group, returnKey, successCallback, errorCallback){
    cordova.exec(successCallback, errorCallback, 'KeychainPlugin', 'getUserAccount', [accountType, group, returnKey]);
  };

  var _getPassword = function(accountType, group, key, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'KeychainPlugin', 'getPassword', [accountType, group, key]);
  };

  var _getDataFromKey = function(accountType, group, key, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'KeychainPlugin', 'getDataFromKey', [accountType, group, key]);
  };

  var _setUserData = function(accountType, group, data, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'KeychainPlugin', 'setUserData', [accountType, group, data]);
  };

  var _changePassword = function(accountType, group, newPassword, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'KeychainPlugin', 'changePassword', [accountType, group, newPassword]);
  };

  var _changePasswordToCero = function(accountType, group, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'KeychainPlugin', 'changePassword', [accountType, group, "0000"]);
  };



  return {
    initWithKey: _initWithKey,
    registerAccount: _addAccount,
    removeAccount: _removeAccount,
    getUserAccount: _getUserAccount,
    getPassword: _getPassword,
    getDataFromKey: _getDataFromKey,
    setUserData: _setUserData,
    setPassword: _changePassword,
    resetPassword: _changePasswordToCero,
  };

})();