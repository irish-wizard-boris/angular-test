(function () {
    'use strict';  
    angular.module('Module1Solution', [])
    .controller('MainController', MainController);

    MainController.$inject = ['$scope'];
    function MainController($scope) {
        $scope.lunchMessage = "";
        $scope.checkLunchItems = function() {
            if($scope.lunchItems === undefined || $scope.lunchItems.trim() === "") {
                $scope.lunchMessage = "";
                return;
            }
            var items = $scope.lunchItems.split(',');
            console.log('Number of items:', items.length);
            if(items.length >= 1 && items.length <= 3)
                $scope.lunchMessage = "Enjoy!";
            else if(items.length > 3)
                $scope.lunchMessage = "Too much!";
        }
    }
})();