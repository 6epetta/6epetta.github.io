	$(document).ready(function(){

           $("#calendar").click(function () {
                       if ($("#date").is(":hidden")) {

                               $("#date").show("slow");

                       } else {

                               $("#date").hide("slow");

                       }
 return false;
});
           jQuery(function($){
					$(document).mouseup(function (e){ 
						var div = $("#date"); 
						if (!div.is(e.target)
						    && div.has(e.target).length === 0) { 
							div.hide("slow");
						}
					});
return false;
				});

           $("#search").click(function(){
           		if($("form").is(":hidden")) {
           			$("form").show("slow");

           		} else{

           			$("form").hide("slow");
           		}


 return false;
           });


           	jQuery(function($){
					$(document).mouseup(function (e){ 
						var div = $("form"); 
						if (!div.is(e.target)
						    && div.has(e.target).length === 0) {
							div.hide("slow"); 
						}
					});
return false;
				});


           $("#ways").click(function(){
           		if($("#places").is(":hidden")){
           			$("#places").show("slow");
           		} else{

           			$("#places").hide("slow");
           		}
          
return false;           
           });

           jQuery(function($){
					$(document).mouseup(function (e){ 
						var div = $("#places"); 
						if (!div.is(e.target) 
						    && div.has(e.target).length === 0) {
							div.hide("slow"); 
						}
					});
return false;
				});

           $("#buttons button").click(function(e) {
 			 e.preventDefault();
  			$("#buttons button").removeClass('active');
 		 $(this).addClass('active');


});
           $("#home").click(function(){
           		if($("#homes").is(":hidden")) {
           			$("#homes").show("slow");

           		} else{

           			$("#homes").hide("slow");
           		}


 return false;
 });
           	jQuery(function($){
					$(document).mouseup(function (e){
						var div = $("#homes"); 
						if (!div.is(e.target) 
						    && div.has(e.target).length === 0) { 
							div.hide("slow"); 
						}
					});
return false;
				});

      	 $("#tour").click(function(){
           		if($("#tours").is(":hidden")) {
           			$("#tours").show("slow");

           		} else{

           			$("#tours").hide("slow");
           		}


 return false;
 });

      	 	jQuery(function($){
					$(document).mouseup(function (e){ 
						var div = $("#tours"); 
						if (!div.is(e.target) 
						    && div.has(e.target).length === 0) { 
							div.hide("slow"); 
						}
					});
return false;
				});


      	  $("#excurse").click(function(){
           		if($("#excurses").is(":hidden")) {
           			$("#excurses").show("slow");

           		} else{

           			$("#excurses").hide("slow");
           		}


 return false;
 });
      	  jQuery(function($){
					$(document).mouseup(function (e){ 
						var div = $("#excurses"); 
						if (!div.is(e.target) 
						    && div.has(e.target).length === 0) { 
							div.hide("slow"); 
						}
					});
return false;
				});

      	  $("#auto").click(function(){
           		if($("#autos").is(":hidden")) {
           			$("#autos").show("slow");

           		} else{

           			$("#autos").hide("slow");
           		}


 return false;
 });
         jQuery(function($){
					$(document).mouseup(function (e){ 
						var div = $("#autos"); 
						if (!div.is(e.target) 
						    && div.has(e.target).length === 0) { 
							div.hide("slow");
						}
					});
return false;
				});


});
	var imgBg=Array('images/bg-01.jpg','images/bg-02.jpg','images/bg-03.jpg');
 showImg = function() {
  var index=Math.floor(Math.random()*imgBg.length);
  document.getElementsByTagName('body')[0].style.backgroundImage='url('+imgBg[index]+')';
  setTimeout(showImg,15000);
 }
 window.onload=showImg;
