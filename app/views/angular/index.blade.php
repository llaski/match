<!doctype html>
<html ng-app="myApp">
  <head>
  <style>
    * { box-sizing: border-box; }
  </style>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.7/angular.min.js"></script>
  </head>
  <body>
   <!--  <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <input type="text" ng-model="yourMsg" placeholder="Enter a msg here">
      <hr>
      <h1>@{{yourMsg}} @{{yourName}}!</h1>
    </div> -->

   <!--  <div ng-controller="Ctrl">
        <input ng-model="name">
        <h1>@{{ name }}</h1>
        <h2>@{{ age }}</h2>
    </div>
    <div ng-controller="AnotherCtrl">
        <input ng-model="name">
        <h1>@{{ name }}</h1>
        <h2>@{{ age }}</h2>
    </div> -->

   <!--  <div>
        <input type="checkbox" ng-model="checked"><label for="">Hide?</label>
    </div> -->
    <!-- <div ng-show="checked">
        Hello, World!
    </div> -->

    <!-- <div>
        <label for="">Name</label><input type="text" ng-model="name">
    </div>
    <div ng-show="name">
        Hello, @{{ name }}!
    </div>
 -->
    <div>
        <input type="search" ng-model="search">
    </div>
    <div ng-controller="List">
        <ul>
            <li ng-repeat="person in people | filter:search">@{{ person.name }} : @{{ person.age }}
            <button ng-click="remove($index)">X</button>
            <span ng-show="$first">First!</span>
            <span ng-show="$middle">Middle!</span>
            <span ng-show="$last">Last!</span>
            </li>
        </ul>
        <p>There are @{{ people.length }} in the list.</p>
        <div>
            <label for="">Name: </label><input ng-model="new_name">
            <br>
            <label for="">Age: </label><input type="number" ng-model="new_age">
            <br>
            <button ng-click="add()">Add</button>
        </div>
    </div>
    <div ng-controller="Browser">
        <div class="url">
            <label for="url">&larr; &rarr; &infin;</label>
            <input value="edit/@{{ path }}">
        </div>

        <div class="page">
            <label for="">Update URL:</label>
            <input type="text" ng-change="clean()" ng-model="path">
        </div>

    </div>

    <div ng-controller="Contacts">
        <div>
            <input type="search" ng-model="search_2">
        </div>

        <select ng-model="selected_person"
                ng-options="person.name for person in people | filter:search_2">
            <option value="">Choose a Person</option>
        </select>
    @{{ selected_person.name }}

        <div>
            <label for="">Name: </label><input ng-model="selected_person.name">
            <br>
            <label for="">Number: </label><input ng-model="selected_person.number">
            <br>
        </div>
    </div>
    <br><br>


    <h2>Filter</h2>
    <div ng-controller="Filter">
        <p>@{{ text | clean:' ' }}</p>
    </div>

    <br><br>

    <h2>Directives</h2>
    <div ng-controller="Directive">
        <clicker click="handler()">@{{ message }}</clicker>
    </div>

    <script>
        // var Ctrl = function($scope) {
        //     $scope.name = "Larry";
        //     $scope.age = 25;
        // };

        // var AnotherCtrl = function($scope) {
        //     $scope.name = "Laski";
        //     $scope.age = 26;
        //     $scope.$watch('name', function() {
        //         console.log($scope.name);
        //     });
        // };
        var List = function ($scope) {
            $scope.people = [
                { name : 'Larry', age: 25 },
                { name : 'Moe', age: 28 },
                { name : 'Curly', age: 29 },
                { name : 'Jeter', age: 30 }
            ];

            $scope.add = function() {
                $scope.people.push({
                    name : $scope.new_name,
                    age : $scope.new_age
                });

                $scope.new_name = "";
                $scope.new_age = "";
            };

            $scope.remove = function(index) {
                $scope.people.splice(index, 1);
            };
        };

        var Browser = function($scope) {

            $scope.clean = function() {
                $scope.path = $scope.path.replace(/\s+/, '-').replace(/[^a-z0-9-]/i, '');
            };
        };

        var Contacts = function($scope) {
            $scope.people = [
                { name : 'Larry', number: '2323232323' },
                { name : 'Moe', number: '123131313' },
                { name : 'Curly', number: '343242343' },
                { name : 'Jeter', number: '4353535' },
            ];
        };

        //Filter
        var myApp = angular.module('myApp', [])
                .filter('clean', function(){
                    return function(input, separator) {
                        var filter = new RegExp ('[^a-z0-9-' + (separator || '-') + ']', 'ig');
                        return input.toLowerCase()
                                    .replace(/\s+/g, (separator || '-'))
                                    .replace(filter, '');
                    };
                })
                .controller('Filter', function($scope){
                    $scope.text = 'Hello World, this is some text!';
                });

        myApp.directive('click', function(){
                return {
                    restrict : 'A',
                    template: '<button ng-transclude></button>',
                    replace: true,
                    transclude: true,
                    link : function(scope, element, attrs) {
                        element.bind('click', function(){
                            scope.$eval(attrs.click);
                        });
                    }
                };
            }).controller('Directive', function($scope){
                $scope.message = 'JS Framework still up for grabs';
                $scope.handler = function() {
                    console.log($scope.message);
                }
            });
    </script>
  </body>
</html>