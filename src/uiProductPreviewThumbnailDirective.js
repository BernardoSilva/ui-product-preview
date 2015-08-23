/**
 * This is the thumbnail directive that adds behaviour to thumbnail elements.
 */
angular.module('ui-product-preview').controller('productPreviewThumbnailController',
    function ($scope) {
        $scope.selectImage = function () {
            $scope.$parent.updatePreview($scope.thumbnail);
        };
    }
);


angular.module('ui-product-preview').directive('productPreviewThumbnail', function () {
    return {
        scope: {thumbnail: '='},
        restrict: 'AE',
        transcend: true,
        require: '^productPreview',
        templateUrl: 'tpl/preview-thumbnail.html',
        controller: 'productPreviewThumbnailController',
        replace: true
    };
});
