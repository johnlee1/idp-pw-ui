(function () {
    'use strict';

    angular
        .module('password', [
            'ngMaterial',
            'ngRoute',
            /*@@DIST-TEMPLATE-CACHE*/
            //'password.analytics',
            'password.title',
            'password.nav',
            'password.welcome',
            'password.forgot',
            'password.recovery',
            'password.change',
            'password.profile'
        ]);
})();