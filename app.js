(function () {
    'use strict';
    angular.module('appCalculator', [])
    .controller('MainController', MainController);
    
    MainController.$inject = ['$scope'];
    function MainController ($scope) {
        $scope.name = '';
        $scope.totalValue = 0;
        $scope.myFun = function() {
            return 'Hello world!';
        }
        $scope.displayNumeric = function() {
            var totalNameValue = calculateTotal($scope.name); 
            $scope.totalValue = totalNameValue
        }

        function calculateTotal(name) {
            var totalVal = 0;
            for (var i = 0; i < name.length; i++) {
                totalVal += name.charCodeAt(i);
            }
            return totalVal;
        }
    }
})();