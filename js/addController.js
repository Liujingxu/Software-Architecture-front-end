var app = angular.module('addUserApp', []);
app.controller('addCtrl', function ($scope, $http, $interval) {

    $scope.users = [
        '刘晶旭',
        '刘恒',
        '王程俊',
        '曹琮皓',
        '武鹏伟',
        '程天'
    ];

    $scope.newUsers = [];

    $http.get('http://localhost:8080/index',).then(function (response) {
        $scope.users = response.data;
    });


    $scope.ishow = false;
    $scope.addName = '';

    $scope.addUser = function () {
        if ($scope.users.includes($scope.addName)) {
            alert('已存在该用户');
        } else {
            $scope.users.push($scope.addName);
            $scope.newUsers.push($scope.addName)
        }
    };

    $scope.isShow = function () {
        $scope.ishow = !$scope.ishow
    }


    $interval(function () {
        console.log('运行');
        for (let i = 0; i < $scope.newUsers.length; i++){
            $http.get('http://localhost:8080/add?name=' + $scope.newUsers[i])
        }
        $scope.newUsers = []
    }, 60000)
})
