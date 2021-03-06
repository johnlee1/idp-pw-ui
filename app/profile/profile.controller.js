(function () {
    'use strict';

    angular
      .module('password.profile')
      .controller('ProfileController', ProfileController);

    function ProfileController(userService, $location, dataService,
                               $route, dialogService, config) {
        var vm = this;

        vm.user = null;
        vm.method = {
            'emails': [],
            'phones': []
        };
        vm.config = config;

        vm.navigate = navigate;
        vm.delete = remove;
        
        activate();

        //////////////////////////////////////////////////////////////////

        function activate() {
            userService
              .getUser()
              .then(function (user) {
                  vm.user = user;
              });

            dataService
              .get('method')
              .then(extractMethods)
              .finally(dialogService.close);

            dialogService.progress();
        }

        function extractMethods(response) {
            var allMethods = response.data;

            allMethods
              .forEach(function (method) {
                  switch (method.type) {
                      case 'email': vm.method.emails.push(method); break;
                      case 'phone': vm.method.phones.push(method);
                  }
              });

        }

        function navigate(url) {
            $location.url(url);
        }

        function remove(method) {
            dialogService
              .areYouSure('Would you like to remove this recovery ' +
                          'method permanently?')
              .then(yes);

            //////////////////////////////////////////////////////////////
            
            function yes() {
                dataService
                  .delete('method/' + method.id)
                  .then(deleted, failed)
                  .finally(dialogService.close);

                dialogService.progress();
            }
        }

        function deleted() {
            $route.reload();
        }

        function failed(response) {
            dialogService
              .fail('Unable to remove recovery method.', response.data);
        }
    }
})();
