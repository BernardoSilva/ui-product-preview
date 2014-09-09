/**
 * this is the main module definition.
 * @type {*|module}
 */
var mod = angular.module('ui-product-preview', []);


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

/**
 * This is the thumbnail directive that adds behaviour to thumbnail elements.
 */
mod.directive('directiveProductPreviewThumbnail', function () {
    return {
        scope: {thumbnail: "="},
        restrict: 'AE',
        transcend: true,
        require: '^directiveProductPreview',
        templateUrl: 'tpl/preview-thumbnail.html',
        link: function (scope, elem, attrs, controllerInstance) {
            scope.selectImage = function () {
                controllerInstance.updatePreview(scope.thumbnail);
            };
        }
    };
});