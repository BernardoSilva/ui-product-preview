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