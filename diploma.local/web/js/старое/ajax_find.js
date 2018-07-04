$(document).ready(function(){ 
    $("#search_term").keyup(function(){ 
        ajax_search(); 
    });
	$("#search_button").click(function(){ 
        ajax_search(); 
    }); 
 
});

function ajax_search(){ 
  var search_val=$("#search_term").val(); 
  $.get("/find/", {search_term : search_val}, function(data){
   if (data.length>0){ 
     $("#search_results").html(data); 
   } 
  }) 
};