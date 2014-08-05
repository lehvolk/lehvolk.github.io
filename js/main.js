(function () {

    var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function () {
        var html = $(this).parent().html();
        html = cleanSource(html);
        $("#source-modal pre").text(html);
        $("#source-modal").modal();
    });

    $('.bs-component [data-toggle="popover"]').popover();
    $('.bs-component [data-toggle="tooltip"]').tooltip();

    $(".bs-component").hover(function () {
        $(this).append($button);
        $button.show();
    }, function () {
        $button.hide();
    });

    function cleanSource(html) {
        var lines = html.split(/\n/);

        lines.shift();
        lines.splice(-1, 1);

        var indentSize = lines[0].length - lines[0].trim().length,
            re = new RegExp(" {" + indentSize + "}");

        lines = lines.map(function (line) {
            if (line.match(re)) {
                line = line.substring(indentSize);
            }

            return line;
        });

        lines = lines.join("\n");

        return lines;
    }

})();

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
                redirectTo: '/'
            });
    }]);

function scrollTo(id) {
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top - 100
    });
}
