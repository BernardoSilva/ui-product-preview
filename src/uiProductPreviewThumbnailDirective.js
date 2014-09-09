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