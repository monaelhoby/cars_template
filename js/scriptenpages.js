$(function () {

      "use strict" ;

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
	//to start OWL carousal
	//---------------------------------------------------//
   var addcars= $(".content #owl-demo");
	addcars.owlCarousel({
			  autoPlay : true,
		  items : 3, //5 items above 1000px browser width
		  itemsDesktop : [1199,3], //5 items between 1199px and 992px
		  itemsDesktopSmall : [991,2], // betweem 992px and 768px
		  itemsTablet: [767,1], //2 items between 767 and 576
		  itemsMobile : true , // itemsMobile disabled - inherit from itemsTablet option
		  itemsMobile : [575,1],
		  singleItem : false,
		  pagination : true,
		  responsive: true,
		  scrollPerPage:true,
		  transitionStyle:true
	  });
	//----------------------------------------------------//
	//to start OWL carousal
	//---------------------------------------------------//
   var specialcars= $(".special #owl-demo");
	specialcars.owlCarousel({
			  autoPlay : true,
		  items : 3, //5 items above 1000px browser width
		  itemsDesktop : [1199,3], //5 items between 1199px and 992px
		  itemsDesktopSmall : [991,2], // betweem 992px and 768px
		  itemsTablet: [767,1], //2 items between 767 and 576
		  itemsMobile : true , // itemsMobile disabled - inherit from itemsTablet option
		  itemsMobile : [575,1],
		  singleItem : false,
		  pagination : true,
		  responsive: true,
		  scrollPerPage:true,
		  transitionStyle:true
	  });

});
