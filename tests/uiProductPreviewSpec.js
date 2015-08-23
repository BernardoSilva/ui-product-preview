
describe('Gallery directive', function () {
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


    it('Replaces the element with the appropriate content', function () {
        // Compile a piece of HTML containing the directive
        element = $compile('<product-preview></product-preview>')($rootScope);
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain('cloud-zoom');
    });

    it('Should have an updatePreview function', function(){
        var $scope = {};
        /*exported controller */
        controller = $controller('productPreviewController', {$scope: $scope});

        expect(typeof $scope.updatePreview).toBe('function');
    });

});
