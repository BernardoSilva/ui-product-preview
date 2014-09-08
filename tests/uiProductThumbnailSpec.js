describe("Gallery Thumbnails: Directive", function(){
	var elm, scope;

	beforeEach(function(){
		angular.module("ui.product-preview");
	});

	// before each test, creates a new fresh scope
    // the inject function interest is to make use of the angularJS
    // dependency injection to get some other services in our test
    // here we need $rootScope to create a new scope
    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        scope.testModel = 42;

        // function to compile a fresh directive with the given template, or a default one
        // compile the tpl with the $rootScope created above
        // wrap our directive inside a form to be able to test
        // that our form integration works well (via ngModelController)
        // our directive instance is then put in the global 'elm' variable for further tests
        var tpl = '<div><ui-product-preview images="images"></ui-product-preview></div>';
        
        // inject allows you to use AngularJS dependency injection
        // to retrieve and use other services
        inject(function($compile) {
            elm = $compile(tpl)(scope);
        });
        // $digest is necessary to finalize the directive generation
        scope.$digest();
    }));

   

	it("should have access to gallery scope", function(){
		
        // a single test example, check the produced DOM
        expect(elm.find('.cloud-zoom').length).toEqual(1);
        expect(elm).toEqual(42);    
        
    });
        
	// });
	it("should display thumbnails", function(){});
	it("should display witch thumbnail is selected", function(){});
});