$(()=>{
	$('.slider').slick({
		lazyLoad: 'ondemand',
		infinite: true,
		dots: false,
		draggable: true,
		arrows: false,
		adaptiveHeight: true,
		centerMode: true,
		centerPadding: '10%',
	})
	.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		if (currentSlide !== nextSlide) {
			$('.slick-center + .slick-cloned').each(function (index, node) {
				var $node = $(node);

				setTimeout(function () {
					$node.addClass('slick-current');
					$node.addClass('slick-center');
				});
			});
		}
	});
})
