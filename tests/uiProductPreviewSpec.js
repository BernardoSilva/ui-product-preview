/* globals UiThumbnail */
describe('Product Preview Directive', function () {
    var $rootScope, $compile, element, $controller, controller;

    beforeEach(function () {
        module('ui-product-preview');
        module('tpl/preview.html');
        module('tpl/preview-thumbnail.html');
    });


    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_, _$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $controller = _$controller_;
    }));


    it('Should replace the element with the appropriate content', function () {
        // Compile a piece of HTML containing the directive
        element = $compile('<product-preview></product-preview>')($rootScope);
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain('cloud-zoom');
    });

    describe('Controller should ', function(){
        describe('have an updatePreview function that', function(){
            it('is present', function(){
              var $scope = {};

              controller = $controller('productPreviewController', {$scope: $scope});

              expect(typeof $scope.updatePreview).toBe('function');
            });

            it('updates the selected image', function() {
              var $scope = {
                selected: 'my-image.jpg'
              };
              
              controller = $controller('productPreviewController', {$scope: $scope});
              expect($scope.selected).toBe('my-image.jpg');
              var newThumbnail = new UiThumbnail({smallSrc: 'new-image.png'});
              $scope.updatePreview(newThumbnail);
              expect($scope.selected instanceof UiThumbnail).toBe(true);
              expect($scope.selected.smallSrc).toBe('new-image.png');
            });

        });
        it('set selected object and previewSrc variables in scope', function(){
            var thumbnail1, $scope;
            thumbnail1 = {smallSrc:'small-img1.png', mediumSrc: 'medium-img1.png', bigSrc: 'big-img1.png'};
            $scope = {
              thumbnails: [
                thumbnail1
              ]
            };
            controller = $controller('productPreviewController', {$scope: $scope});

            expect($scope.selected).toMatch(thumbnail1);
        });

        it('set the previewSrc with smallSrc image from selected object', function(){
            var thumbnail1, $scope;
            thumbnail1 = {smallSrc:'small-img1.png', mediumSrc: 'medium-img1.png', bigSrc: 'big-img1.png'};
            $scope = {
              thumbnails: [
                thumbnail1
              ]
            };
            controller = $controller('productPreviewController', {$scope: $scope});
            expect($scope.previewSrc).toMatch(thumbnail1.smallSrc);
        });
    });


});
