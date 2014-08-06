var docs = angular.module('docs', ['ngRoute']);

docs.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/quantile/examples', {
                templateUrl: 'quantile/examples.html'

            }).
            when('/quantile/guide', {
                templateUrl: 'quantile/guide.html'
            }).
            when('/quantile/download', {
                templateUrl: 'quantile/downloads.html'
            }).
            when('/toolkits', {
                templateUrl: 'toolkits/toolkits.html'

            }).
            otherwise({
                redirectTo: '/',
                templateUrl: 'main.html'
            });
    }]);

docs.controller('PageCtrl', function ($scope, $location, $anchorScroll) {
});

docs.directive('scrollOnClick', function () {
    return {
        restrict: 'A',
        link: function (scope, $elm, attrs) {
            var idToScroll = attrs.destination;
            $elm.on('click', function () {
                var $target;
                if (idToScroll) {
                    $target = $("#" + idToScroll);
                } else {
                    $target = $elm;
                }
                $("html,body").animate({scrollTop: $target.offset().top - 80});
            });
        }
    }
});

docs.directive('documentation', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<div class="container"><section class="container main-body"><div class="main-grid main-body-grid"><div class="container" ng-transclude></div></section></div>'
    };
});
