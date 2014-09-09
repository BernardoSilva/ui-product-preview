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
//        template: '<div class="benny-gallery-container">'+
//            '<div class="row">'+
//        '<div class="col-md-12">'+
//            '<div class="col-md-6">'+
//                '<a class="cloud-zoom" href="{{ previewSrc }}" id="zoom1" rel="adjustX: 10, adjustY:-4">'+
//                    '<img ng-src="{{previewSrc}}" alt="" />'+
//                '</a>'+
//                '<div class="row">'+
//
//                '</div>'+
//            '</div>'+
//            '<div class="col-md-6">'+
//            'zoom here!'+
//            '</div>'+
//        '</div>'+
//        '</div>'+
//    '</div>',
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