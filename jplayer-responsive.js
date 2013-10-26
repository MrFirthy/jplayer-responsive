(function($container){
// set to the necessary element and not window or document for better performance

	var initialContainerWidth = $container.width();
	// this is the overall page container, so whatever is relevant to your page

	$(window).resize(function(){
		if($container.width() !== initialContainerWidth){
		// checks current container size against it's rendered size on every resize.
			initialContainerWidth = $container.width();
			$container.trigger('resize', $container);
			//pass off to resize listener for performance
		}
	});

}($('#container')));


$('#container').on('resize', function(e){
	
	$('.jp-video').each(function(index){
		
		// find every instance of jplayer using a class in their default markup
		var $parentContainer = $(this).closest('#every, #container, #containing, #jplayer'),
			// finds jplayers closest parent element from the ones you give it (can chain as many as you want)
			containerWidth = $parentContainer.width(),
			//takes the closest elements width
			var ARWidth = 1280;
			var ARHeight = 720;
			// Width and height figures used to calculate the aspect ratio (will not restrict your players to this size)

			var aspectRatio = ARHeight / ARWidth;

			videoHeight = Math.round(aspectRatio * containerWidth);
			// calculates the appropriate height in rounded pixels using the aspect ratio

		$(this).width(containerWidth).height(videoHeight);
		// and then apply the width and height!

	});

});