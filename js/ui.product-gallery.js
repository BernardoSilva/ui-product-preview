var mod = angular.module('ui.product-preview', []);
mod.directive('uiProductPreview', function() {
  return {
    scope: {images:'='},
    restrict: 'AE',
    replace: true,
    templateUrl: '../gallery-tpl.html',
    controller: function($scope, $compile, $http) {
      $scope.thumbnails = [];

      
      // $scope is the appropriate scope for the directive
      this.addChild = function(nestedDirective) { // this refers to the controller
        console.log('Got the message from nested directive:' + nestedDirective.message);
        $scope.thumbnails.push(nestedDirective);
      };

      this.updatePreview = function(thumbnail)
      {
          $scope.previewSrc = thumbnail.thumbnailSrc;
      };

      var init = function(){
      		// Push the parent images into scope.
          $scope.thumbnails = $scope.images;

        initPreview();
          
      };

  		var initPreview = function()
  		{
  			if($scope.thumbnails.length > 0) {
  				$scope.previewSrc = $scope.thumbnails[0].thumbnailSrc;		
  			} else {
  				$scope.previewSrc = 'images/demo-medium.png';
  			}
  		};

      init();

    },
    
  };
});

var ThumbnailImage = function(){
    this.thumbnailSrc = '';
    this.mediumSrc = '';
    this.bigSrc = '';
};

mod.directive('uiProductPreviewThumbnail', function() {
  return {
      scope: {thumbnail: "="},
      restrict: 'AE',
      transcend: true,
      require: '^uiProductPreview',
      templateUrl: '../gallery-tpl-thumbnail.html',
      link: function(scope, elem, attrs, controllerInstance) {
        console.log(scope.thumbnail);
      //the fourth argument is the controller instance you require
      scope.message = "Hi, Parent directive";
      // controllerInstance.addChild(scope);


      scope.selectImage = function(){
          console.log('select this!', scope.thumbnail.thumbnailSrc);
          controllerInstance.updatePreview(scope.thumbnail);
      };
    }
  };
});