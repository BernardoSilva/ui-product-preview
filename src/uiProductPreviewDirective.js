

/**
 * The main product preview directive is here.
 */
mod.directive('uiProductPreview', function () {
    return {
        scope: {images: '='},
        restrict: 'AE',
        replace: true,
        templateUrl: '../src/template/gallery-tpl.html',
        controller: function ($scope, $compile, $http) {
            $scope.thumbnails = [];

            this.updatePreview = function (thumbnail) {
                $scope.previewSrc = thumbnail.smallSrc;
            };

            var init = function () {
                // Push the parent images into scope.
                $scope.thumbnails = $scope.images;


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
