$(()=>{
	$('.slider').slick({
		lazyLoad: 'ondemand',
		infinite: false,
		dots: false,
		draggable: true,
		arrows: true,
		adaptiveHeight: true,
		centerMode: true,
		centerPadding: '10%',
		nextArrow: '<button type="button" class="ph-caret-circle-right slick-next"></button>',
    prevArrow: '<button type="button" class="ph-caret-circle-left slick-prev"></button>',
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
