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
    if($scope.user._id){ //if user is present then edit the info
            $http.post('/editUser',$scope.user).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.user={//reset the value of $scope after saveing
                name:'',
                email:'',
                password:''
            };
            $scope.getUser();
        });
    } else { // create a user if user is not there
    $http.post('/saveUser',$scope.user).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.user={//reset the value of $scope after saveing
                name:'',
                email:'',
                password:''
            };
            $scope.getUser();
        });
    }
}

$scope.editUser=function(user){
    $scope.user=user;
}
$scope.deleteUser=function(user){
        console.log("delete the user",user._id);
        $http.post('/deleteUser',user).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log("deleted",response);
            $scope.getUser();
        });
}

}]);
