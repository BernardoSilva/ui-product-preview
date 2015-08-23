/**
 * The directive controller to add behaviour.
 */
angular.module('ui-product-preview').controller('productPreviewController', function ($scope) {
    $scope.updatePreview = function (thumbnail) {
        $scope.selected = thumbnail;
        $scope.previewSrc = thumbnail.smallSrc;
    };
});

/**
 * The main product preview directive is here.
 */
angular.module('ui-product-preview').directive('productPreview', function () {
    return {
        scope: {thumbnails: '=images'},
        restrict: 'AE',
        replace: true,
        templateUrl: 'tpl/preview.html',
        link: function (scope) {
            if (scope.thumbnails) {
                scope.previewSrc = scope.thumbnails[0].smallSrc;
            } else {
                scope.previewSrc = 'images/demo-medium.png';
            }
        },
        controller: 'productPreviewController'
    };
});
