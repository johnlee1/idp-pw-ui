(function () {
    'use strict';

    angular
      .module('password.recovery', [
          'ngMaterial',
          'ngRoute',
          'ngMessages',
          'password.html',
          'password.data',
          'password.button',
          'password.dialog',
          'password.verification'
      ]);
})();
