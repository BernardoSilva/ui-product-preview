

/**
 * The main product preview directive is here.
 */
mod.directive('directiveProductPreview', function () {
    return {
        scope: {images: '='},
        restrict: 'AE',
        replace: true,
        templateUrl: 'tpl/preview.html',
        controller: function ($scope, $compile, $http) {
            $scope.thumbnails = [];

            this.updatePreview = function (thumbnail) {
                $scope.previewSrc = thumbnail.smallSrc;
            };

            var init = function () {
                // Push the parent images into scope.
                if($scope.images) {
                    $scope.thumbnails = $scope.images;
                }



                if ($scope.thumbnails.length > 0) {
                    $scope.previewSrc = $scope.thumbnails[0].smallSrc;
                } else {
                    $scope.previewSrc = 'images/demo-medium.png';
                }
            };

            init();

        },

    };
});
