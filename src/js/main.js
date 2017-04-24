/// <reference path="main.js" />
var app = angular.module('main', []);
app.controller("myCtrl", function ($scope) {
    $scope.message = "here is our new site starts ";
});

app.controller("welcome", function ($scope) {
    $scope.message = "welcome to Home Page";
});

app.controller("aboutCtrl", function ($scope) {
    $scope.message = "welcome to About Us";
});

app.controller("solutionsCtrl", function ($scope) {
    $scope.message = "welcome to Soutions";
});

app.controller("servicesCtrl", function ($scope) {
    $scope.message = "welcome to Services";
});

app.controller("contactCtrl", function ($scope) {
    $scope.message = "welcome to Contact Us";
});