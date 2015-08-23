/**
 * this is the main module definition.
 * @type {*|module}
 */
angular.module('ui-product-preview', []);

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
