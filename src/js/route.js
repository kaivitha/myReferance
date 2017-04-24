/// <reference path="angular.min.js" />

var app = angular.module("Myapp", ["ngRoute", "main"]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/welcome', {
        templateUrl: "Templates/myhome.html",
        controller: "welcome"
    })
    .when('/about', {
        templateUrl: "Templates/about.html",
        controller: "aboutCtrl"
    })
	 .when('/services', {
        templateUrl: "Templates/services.html",
        controller: "servicesCtrl"
    })
    .when('/solutions', {
        templateUrl: "Templates/solutions.html",
        controller: "solutionsCtrl"
    })
        .when('/contact', {
            templateUrl: "Templates/contact.html",
            controller: "contactCtrl"
        })
    .otherwise({
        redirectTo: '/welcome'
    });
});

