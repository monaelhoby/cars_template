$(function () {

      "use strict" ;

	//----------------------------------------------------//
	//to start WOW Library
	//---------------------------------------------------//

	new WOW().init();


	//----------------------------------------------------//
	//Switch between Arabic and English
	//---------------------------------------------------//

	$(".cont_list_select_mate ul li").click(function(){
			if(this.first()){
			   this.html('<a href="index.html"></a>')
			}
		    if(this.last()){
			   this.content('<a href="ltr.html"></a>')
			}
	});

	//list-group

	$(".new-used-cars #my-tab li").click(function(){

        var myID=$(this).attr("id");

        $(this).removeClass("inactive").siblings().addClass("inactive");

        $(".new-used-cars .content").hide();

        $("#"+$(this).attr("id")+"-content").fadeIn(1000);
        });

        //----------------------------------------------------//
        //to start OWL carousal for Adding cars
        //---------------------------------------------------//
         var owladdcar= $(".content .owl-carousel");
	owladdcar.owlCarousel({
		rtl:true,
			autoplay:true,
    		nav:false,
			 responsiveClass:true,
			loop:true,
    		margin:10,
		responsive:{
			0:{
				items:1
			},
			575:{
				items:2
			},
			767:{
				items:2
			},
			992:{
				items:3
			},
			1199:{
				items:3
			}
		}

  });
	//----------------------------------------------------//
	//to start OWL carousal
	//---------------------------------------------------//
	var owlen= $(".special .owl-carousel");
	owlen.owlCarousel({
		rtl:true,
			autoplay:true,
    		nav:false,
			 responsiveClass:true,
			loop:true,
    		margin:10,
		responsive:{
			0:{
				items:1
			},
			575:{
				items:2
			},
			767:{
				items:2
			},
			992:{
				items:3
			},
			1199:{
				items:3
			}
		}

  });

//	var nsOptions = {
//		transitionType: "zoom" ,
//    transitionType: "slide",
//		autoAdvance: true,
//    delay: 2000,
//    transitionSpeed: 1000,
//		 aspectRatio: "1000:424",
//    initSliderByCallingInitFunc: false,
//    shuffle: false,
//    startSlideIndex: 0, //0-based
//    navigateByTap: true,
//    pauseOnHover: true,
//    keyboardNav: true,
//    before: null,
//    license: ""
//	};

	//----------------------------------------------------//
	//to start OWL carousal
	//---------------------------------------------------//
        $(".switchtabs .content").not('#tab1-content').hide();
	$(".switchtabs #my-tab li").click(function(){

        var myID=$(this).attr("id");

        $(this).removeClass("inactive").siblings().addClass("inactive");

        $(".switchtabs .content").hide();

        $("#"+$(this).attr("id")+"-content").fadeIn(1000);
        });

});
