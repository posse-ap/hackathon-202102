$(function(){

	$('.thumb')
	.on('mouseover', function(){
		$(this).find('.thumb_frame a')
		.stop(true)
		.animate({ borderWidth: '20px' }, 200, '');
	})
	.on('mouseout', function(){
		$(this).find('.thumb_frame a')
		.stop(true)
		.animate({ borderWidth: '10px' }, 200, '');
	});

});