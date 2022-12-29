// Owl Carousel
if($('.product-slide').length > 0 ){
	$('.product-slide').owlCarousel({
		items: 1,
		margin: 30,
		dots : false,
		nav: true,
		loop: false,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			800 : {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});
}

//Home popular 
if($('.owl-product').length > 0 ){
	var owl = $('.owl-product');
		owl.owlCarousel({
		margin: 10,
		dots : false,
		nav: true,
		loop: false,
		touchDrag:false,
		mouseDrag  : false,
		responsive: {
			0: {
				items: 2
			},
			768 : {
				items: 4
			},
			1170: {
				items: 8
			}
		}
	});
}

$('ul.tabs li').click(function(){
	var $this = $(this);
	var $theTab = $(this).attr('id');
	console.log($theTab);
	if($this.hasClass('active')){
	  // do nothing
	} else{
	  $this.closest('.tabs_wrapper').find('ul.tabs li, .tabs_container .tab_content').removeClass('active');
	  $('.tabs_container .tab_content[data-tab="'+$theTab+'"], ul.tabs li[id="'+$theTab+'"]').addClass('active');
	}
	
});