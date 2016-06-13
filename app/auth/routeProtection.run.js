(function () {
    'use strict';

    angular
      .module('password.auth')
      .run(establishRouteProtection);

    function establishRouteProtection($rootScope, $mdDialog, $injector) {
        $rootScope.$on('$routeChangeStart', protect);
        $rootScope.$on('$routeChangeError', defend);

        //////////////////////////////////////////////////////////////////
        
        function protect(event, targetRoute) {
            if (targetRoute.protected) {
                targetRoute.resolve = targetRoute.resolve || {};

                targetRoute.resolve.authorizer = authorize;
            }
        }

        function authorize() {
            // used injector here instead of simple parameter injection to
            // avoid minification issues
            return $injector
                     .get('userService')
                     .getUser()
                     .then(function (user) {
                         if (! user.isAuthenticated) {
                             throw new IntruderError();
                         }
                     });
        }

        function defend(event, targetRoute, currentRoute, error) {
            if (error instanceof IntruderError) {
                $mdDialog.show({
                    templateUrl: 'auth/not-authorized-dialog.html',
                    controller: 'NotAuthorizedDialogController',
                    controllerAs: 'vm',
                    escapeToClose: false
                });
            }
        }

        function IntruderError() {
            this.message = 'Unauthorized';
        }
        IntruderError.prototype = Object.create(Error.prototype);
        IntruderError.prototype.constructor = IntruderError;
    }
})();
