(function() {
    'use strict';

    angular
        .module('password.nav')
        .run(lookForParameter);

    function lookForParameter($rootScope, returnToService, $location) {
        $rootScope.$on('$locationChangeStart', function() {
            var queryString = $location.search();

            if (queryString.returnTo &&
              angular.isString(queryString.returnTo)) {
                returnToService.url = queryString.returnTo;
            }
        });
    }
})();