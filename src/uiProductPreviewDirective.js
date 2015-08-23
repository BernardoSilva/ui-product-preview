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
