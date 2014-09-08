describe('Gallery', function(){
    var $rootScope, $compile;

    beforeEach(function(){
        angular.module("ui-product-preview");
    });

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile('<ui-product-preview images="images"></ui-product-preview>')($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain("xx");
    });


	it("should should display a default preview.", function() {


    });

	it("should change the preview image", function() {});

	
});