/**
 * This is the thumbnail directive that adds behaviour to thumbnail elements.
 */
mod.directive('uiProductPreviewThumbnail', function () {
    return {
        scope: {thumbnail: "="},
        restrict: 'AE',
        transcend: true,
        require: '^uiProductPreview',
        templateUrl: '../src/template/gallery-tpl-thumbnail.html',
        link: function (scope, elem, attrs, controllerInstance) {
            scope.selectImage = function () {
                controllerInstance.updatePreview(scope.thumbnail);
            };
        }
    };
});