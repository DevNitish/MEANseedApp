/*
Change the name of myApp to your angular app.
Make sure to change the same on index.html page
*/ 
var myApp= angular.module('myApp',[]);

myApp.controller('mainCtrl', ["$scope", function($scope){

$scope.mytext="This text is from Angular controller";

}]);
