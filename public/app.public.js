/*
Change the name of myApp to your angular app.
Make sure to change the same on index.html page
*/ 
var myApp= angular.module('myApp',[]);

myApp.controller('mainCtrl', ["$scope","$http", function($scope,$http){

$scope.user={
    name:'',
    email:'',
    password:''
};
$scope.users=[];

$scope.getUser=function(){
    $http.get('/getUser').then(function successCallback(response){
        console.log("users===>",response)
        $scope.users=response.data;
    })
}
$scope.saveUser=function(){
    console.log(" the user is ",$scope.user);
    $http.post('/saveUser',$scope.user).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log("added",response);
            $scope.getUser();
        });
}


}]);
