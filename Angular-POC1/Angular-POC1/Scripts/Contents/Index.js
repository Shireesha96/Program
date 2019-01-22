"use strict";

angular.module('myapp', []);

//over loading
angular.module('myapp').controller('MainController', ['$scope', function ($scope) {
    console.log('Hello.');
    $scope.message = "Welcome";
    $scope.wmessage = "Hello"; // initialising value

    //creating function
    $scope.sayHello = function (name) {
        return $scope.wmessage + ' ' + name+'.';
    };  
}]);

//getting items
angular.module('myapp').controller('secController', ['$scope', '$interval', function ($scope, $interval) {

    var items = ['Kit Kat', 'Five Star', 'Dairy Milk', 'Milky Bar', 'Bar One'];

    $scope.itemIndex = null;
    $scope.currentItem = '';
    $scope.randomValue = -999;
    $scope.names = ['Ram', 'Tom', 'Sam'];
    $scope.qty = 20;
    $scope.cost = 0.25;
    $scope.pWidth = 100;

    $scope.getItem = function () {
        $scope.currentItem = items[$scope.itemIndex];
    };

    $interval(function () {
        $scope.itemIndex = Math.round(Math.random() * (items.length - 1));
        $scope.getItem();
        $scope.randomValue = Math.round(Math.random() * 1000000);
    }, 2000);

   
}]);

angular.module('myapp').controller('parentController', ['$scope', function ($scope) {
    $scope.model = {
        name: 'John Smith'
    };

}]);

angular.module('myapp').controller('childController', ['$scope', function ($scope) {


}]);