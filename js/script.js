"use strict";
/* ==== Jquery Functions ==== */
(function($) {
	
	/* ==== Tool Tip ==== */	
    $('[data-toggle="tooltip"]').tooltip();	
		
	
	/* ==== Testimonials Slider ==== */	
  	$(".testimonialsList").owlCarousel({      
	   loop:true,
		margin:30,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			768:{
				items:1,
				nav:false
			},
			1170:{
				items:1,
				nav:false,
				loop:true
			}
		}
  	});
	
	
	/* ==== Revolution Slider ==== */
	if($('.tp-banner').length > 0){
		$('.tp-banner').show().revolution({
			delay:6000,
	        startheight:550,
	        startwidth: 1140,
	        hideThumbs: 1000,
	        navigationType: 'none',
	        touchenabled: 'on',
	        onHoverStop: 'on',
	        navOffsetHorizontal: 0,
	        navOffsetVertical: 0,
	        dottedOverlay: 'none',
	        fullWidth: 'on'
		});
	}
	
})(jQuery);





// $(document).ready(function () {
//     var navListItems = $('div.setup-panel div a'),
//         allWells = $('.setup-content'),
//         allNextBtn = $('.nextBtn'),
//         allPrevBtn = $('.prevBtn');

//     allWells.hide();

//     navListItems.click(function (e) {
//         e.preventDefault();
//         var $target = $($(this).attr('href')),
//             $item = $(this);

//         if (!$item.hasClass('disabled')) {
//             navListItems.removeClass('btn-indigo').addClass('btn-default');
//             $item.addClass('btn-indigo');
//             allWells.hide();
//             $target.show();
//             $target.find('input:eq(0)').focus();
//         }
//     });

//     allPrevBtn.click(function(){
//         var curStep = $(this).closest(".setup-content"),
//             curStepBtn = curStep.attr("id"),
//             prevStepSteps = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

//             prevStepSteps.removeAttr('disabled').trigger('click');
//     });

//     allNextBtn.click(function(){
//         var curStep = $(this).closest(".setup-content"),
//             curStepBtn = curStep.attr("id"),
//             nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
//             curInputs = curStep.find("input[type='text'],input[type='url']"),
//             isValid = true;

//         $(".form-group").removeClass("has-error");
//         for(var i=0; i< curInputs.length; i++){
//             if (!curInputs[i].validity.valid){
//                 isValid = false;
//                 $(curInputs[i]).closest(".form-group").addClass("has-error");
//             }
//         }

//         if (isValid)
//             nextStepWizard.removeAttr('disabled').trigger('click');
//     });

//     $('div.setup-panel div a.btn-indigo').trigger('click');
// });


