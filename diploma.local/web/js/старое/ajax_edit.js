$(document).ready(function() {
    $("#search_results").on("click",".edit-ajax",function(){
		
			var id_doctor = $(this).data("id"); 	
			var Name=$("#name-"+id_doctor).val();
			var FIO=$("#fio_d-"+id_doctor).val();
			var Phone=$("#phone_d-"+id_doctor).val();
			var Kab=$("#kab_d-"+id_doctor).val();
			var Level=$("#level_d-"+id_doctor).val();
			var Uch=$("#uch_d-"+id_doctor).val();

		// AJAX code to send data to php file.
        $.ajax({
            type: "put",
            url: "/edit",
            data: {Spec:Spec,FIO:FIO,Phone:Phone, Kab:Kab, Level:Level, Uch:Uch, id_doctor:id_doctor},
            dataType: "JSON",
			success: function(data) { console.log(data); }
                })
                .done(function(message){
					ajax_search();
                    console.log(message);
                    alert(message);
                });
                return false;
});
});
 