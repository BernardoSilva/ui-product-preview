/**
 * this is the main module definition.
 * @type {*|module}
 */
var mod = angular.module('ui-product-preview', []);
/**
 * The directive controller to add behaviour.
 */
mod.controller('directiveProductPreviewController', function ($scope) {
    $scope.updatePreview = function (thumbnail) {
        $scope.selected = thumbnail;
        $scope.previewSrc = thumbnail.smallSrc;
    };


});

/**
 * The main product preview directive is here.
 */
mod.directive('directiveProductPreview', function () {
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
        controller: 'directiveProductPreviewController'
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
        controller: function ($scope) {
            $scope.selectImage = function () {
                $scope.$parent.updatePreview($scope.thumbnail);
            };
        },
        replace: true
    };
});