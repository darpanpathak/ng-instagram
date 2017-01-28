(function () {

    var app = angular.module('ng-insta');

    app.factory('appService', ['$resource', '$q', '$rootScope', function ($resource, $q, $rootScope) {

        var access_token = "2132663916.6e984e2.851df7de6a294f7a848db2804898465f";
        var username = "darpie77";

        return {
            getProfile: function () {
                var deferred = $q.defer();

                $resource('https://api.instagram.com/v1/users/self/?access_token=' + access_token)
                    .get(function (response) {
                        deferred.resolve(response);
                    },
                    function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            },
            getMedia: function () {
                var deferred = $q.defer();

                $resource('https://api.instagram.com/v1/users/self/media/recent?access_token=' + access_token)
                    .get(function (response) {
                        deferred.resolve(response);
                    },
                    function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            }
        };

    }]);

})();