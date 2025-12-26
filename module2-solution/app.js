(function () {
    'use strict';  
    angular.module('Module2Solution', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingService', ShoppingService);

    ToBuyController.$inject = [ 'ShoppingService'];

    function ToBuyController(ShoppingService) {
        var toBuy = this;

        toBuy.items = ShoppingService.items;

        toBuy.buyItem = function (itemIndex) {
            var itemBought = toBuy.items[itemIndex];
            ShoppingService.addItem(itemBought);
            toBuy.items.splice(itemIndex, 1);
        }
    }

    AlreadyBoughtController.$inject = [ 'ShoppingService' ];

    function AlreadyBoughtController(ShoppingService) {
        var alreadyBought = this;
        alreadyBought.boughtItems = ShoppingService.boughtItems;
    }

    function ShoppingService() {
        var service = this;

        service.items = [
            { name: "Cookies", quantity: 10 },
            { name: "Coke", quantity: 2 },
            { name: "Gummy bears", quantity: 11 },
            { name: "Chocolate bar", quantity: 1 },
            { name: "Pepsi", quantity: 10 },
            { name: "Candy", quantity: 100 },
        ];

        service.boughtItems =  [];

        service.addItem = function (item) {
            service.boughtItems.push(item);
        }

        return service;
    }
})();