(function () {

    var app = angular.module('ng-insta');

    app.controller('profileCtrl', ['$scope', 'appService', function ($scope, appService) {
        $scope.profile = {};
        $scope.getProfile = function () {
            appService.getProfile()
                .then(function (resolve) {
                    $scope.profile = resolve.data;
                    console.log(resolve);
                    $scope.getUserMedia();
                },
                function (reject) {
                    console.log(reject);
                });
        }
        $scope.getProfile();

        $scope.getUserMedia = function(){
            appService.getMedia()
                .then(function (resolve) {
                    $scope.profile.media = resolve.data;
                    console.log(resolve);
                },
                function (reject) {
                    console.log(reject);
                });
        }

    }]);

})();