$(document).ready(function(){ 
	
	$("#specialization").onchange(function(){ 
        ajax_select(); 
    }); 
	
});

function ajax_select(){ 
  
  if (n == 1) 
  {
	  $.get("/find_doc_by_spec" , function(data){ 
     if (data.length>0){ 
		$("#doctor").html(data); 
	 }
  }) 
  }

};