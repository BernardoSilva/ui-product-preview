describe('Gallery', function(){
    var $rootScope, $compile, element;

    beforeEach(function(){
        angular.module("ui-product-preview");
//        module('tpl/preview.html');
//        module('tpl/preview-thumbnail.html');
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
        $rootScope = $rootScope.$new();
        element = angular.element('<directive-product-preview></directive-product-preview>');
        console.log(element);
        $compile(element)($rootScope);
        console.log(element);

        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        // Check that the compiled element contains the templated content
        expect(element['length']).toContain("xx");
    });


	it("should should have scope object", function() {
//        // Compile a piece of HTML containing the directive
//        var element = $compile('<ui-product-preview images="images"></ui-product-preview>')($rootScope);
//        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
//        $rootScope.$digest();
//        // Check that the compiled element contains the templated content
//        expect($rootScope.thumbnails.length).toBe(0);

    });

	it("should change the preview image", function() {});

	
});