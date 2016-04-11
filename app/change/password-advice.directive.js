(function() {
    'use strict';

    angular
        .module('password.change')
        .directive('pwPasswordAdvice', pwPasswordAdvice);

    function pwPasswordAdvice() {
        return {
            restrict : 'E',
            controller: PasswordAdviceController,
            controllerAs: 'vm',
            bindToController: true,
            scope : {
                warning: '=',
                suggestions: '='
            },
            templateUrl : 'change/password-advice.html'
        };
    }

    function PasswordAdviceController($mdDialog) {
        var vm = this;

        vm.showAdvice = showAdvice;
        vm.hideAdvice = hideAdvice;

        activate();

        //////////////////////////////////////////////////////////////////

        function activate() {
        }

        function showAdvice() {
            $mdDialog.show({
                templateUrl: 'change/password-advice-dialog.html',
                controller: PasswordAdviceController,
                bindToController: true,
                controllerAs: 'vm',
                locals: {
                    warning: vm.warning,
                    suggestions: vm.suggestions
                }
            });
        }

        function hideAdvice() {
            $mdDialog.hide();
        }
    }
})();
