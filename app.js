
var tamilWordsApp = angular.module('tamilWordsApp', ['ngRoute']);

tamilWordsApp.config(function($routeProvider) {
    $routeProvider
        .when('/',          { templateUrl : 'pages/home.html',      controller  : 'homeController' })
        .when('/wordslist', { templateUrl : 'pages/wordslist.html', controller  : 'wordsListController' })
        .when('/wordinfo',  { templateUrl : 'pages/wordinfo.html',  controller  : 'wordInfoController' });
});

tamilWordsApp.controller('homeController', function($scope) {
    $scope.startingLetters = ['க', 'ச', 'ட', 'த',  'ப', 'ற', 'ய', 'ர', 'ல', 'வ', 'ள'];
});

tamilWordsApp.controller('wordsListController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

tamilWordsApp.controller('wordInfoController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});