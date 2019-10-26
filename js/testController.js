var app = angular.module('testController', []);
app.controller('ctrl', function ($scope) {
    $scope.firstName = '刘';
    $scope.lastName = '晶旭'
});

var app2 = angular.module('testController', []);
app2.controller('ctrl2', function ($scope) {
    $scope.names = [
        {id: 'y01', name: '刘晶旭'},
        {id: 'y02', name: '曹琮皓'},
        {id: 'y03', name: '赵宸'},
        {id: 'y04', name: '武鹏伟'},
        {id: 'y05', name: '程天'},
    ]
})
