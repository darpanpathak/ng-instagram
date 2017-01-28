(function () {

    var app = angular.module('ng-insta', ['ui.router', 'ngResource']);

    app.config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $httpProvider) {

            $urlRouterProvider.rule(function ($injector, $location) {
                //what this function returns will be set as the $location.url
                var path = $location.path(), normalized = path.toLowerCase();
                if (path != normalized) {
                    //instead of returning a new url string, I'll just change the $location.path directly so I don't have to worry about constructing a new url string and so a new state change is not triggered
                    $location.replace().path(normalized);
                }
                // because we've returned nothing, no state change occurs
            });

            //if no route found
            $urlRouterProvider.otherwise('app/feed');

            $stateProvider
                .state('app', {
                    abstract: true,
                    url: '/app',
                    views: {
                        '': {
                            templateUrl: './templates/layout.html'
                        },
                        'content': {
                            templateUrl: './templates/content.html'
                        }
                    }
                })
                .state('app.profile', {
                    url: '/profile',
                    templateUrl: './templates/app/profile.html',
                    controller: 'profileCtrl'
                })
                .state('app.feed', {
                    url: '/feed',
                    templateUrl: './templates/app/feed.html',
                    controller: 'feedCtrl'
                });
        }]);
})();


