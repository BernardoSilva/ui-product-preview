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

    /**
     * Function to contain the init logic.
     * Set the first image as the preview image.
     */
    var init = function() {
      if (angular.isDefined($scope.thumbnails) && $scope.thumbnails.length > 0) {
          $scope.selected = $scope.thumbnails[0];
          $scope.previewSrc = $scope.selected.smallSrc;
      }
    };

    // Init the controller logic.
    init();
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
