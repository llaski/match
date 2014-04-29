// angular
//     .module('contacts', [])
//     .config(function($routeProvider){
//         $routeProvider
//             //Edit Contact
//             //
//             .when('/angular/contacts', {
//                 templateUrl : "list.html"
//             });
//     })
//     .
// angular.module('app', ['ngRoute']);
angular
    .module('contacts', ['ngRoute'])
    .config(function($routeProvider){

        $routeProvider
            .when('/contact/:index', {
                templateUrl : '/templates/edit.html',
                controller : 'Edit'
            })
            .when('/add', {
                templateUrl : '/templates/edit.html',
                controller : 'Add'
            })
            .when('/delete/:index', {
                templateUrl : '/templates/edit.html',
                controller : 'Delete'
            })
            .when('/', {
                templateUrl : "/templates/list.html"
            });
    })
    .controller('Contacts', function($scope) {
        $scope.contacts = [
            { name : 'Moe', number : '12345' },
            { name : 'Larry', number : '678910' },
            { name : 'Currly', number : '1112131415' }
        ];
    }).controller('Edit', function($scope, $routeParams) {
        $scope.contact = $scope.contacts[$routeParams.index];
        $scope.index = $routeParams.index;
    }).controller('Add', function($scope) {
        var length = $scope.contacts.push({
            name : 'new contact',
            number: ''
        });

        $scope.contact = $scope.contacts[length - 1];
        $scope.index = length - 1;
    }).controller('Delete', function($scope, $routeParams, $location) {
        $scope.contacts.splice($routeParams.index, 1);
        $location.path('/').replace('');
    });;