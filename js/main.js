function fixScrollup() {
    var
        $scrollup = $('.scrollup'),
        $body = $('body'),
        $window = $(window);
    if ($body.height() > $window.height()) {
        $scrollup.show();
    } else {
        $scrollup.hide();
    }
}

angular.module('docs', ['ngRoute']).config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/about', {
                templateUrl: 'about.html'
            }).
            when('/quantile/why', {
                templateUrl: 'quantile/why.html'
            }).
            when('/quantile/examples', {
                templateUrl: 'quantile/examples.html'
            }).
            when('/quantile/install', {
                templateUrl: 'quantile/install.html'
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
    }]).directive('scrollOnClick', function() {
    return {
        restrict: 'A',
        link: function(scope, $elm, attrs) {
            var idToScroll = attrs.destination;
            $elm.on('click', function() {
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
}).directive('documentation', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<div class="row">' +
        '<div class="col-md-2"></div>' +
        '<section class="main-body col-md-10">' +
        '<div class="main-grid main-body-grid">' +
        '<div ng-transclude/>' +
        '</div>' +
        '</section>' +
        '</div>'
    };
});


$(document).ready(function() {
    fixScrollup();
    $(window).scroll(function() {
        fixScrollup();
    });
});
