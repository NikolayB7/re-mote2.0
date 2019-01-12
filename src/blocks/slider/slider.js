

  $('.slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed:2000,
		speed:1000,
		cssEase:'ease-in',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					dots:false,
					autoplay: false,
				}
			},
			{
				breakpoint: 590,
				settings: {
					autoplay: false,
				}
			}
		]



	});
