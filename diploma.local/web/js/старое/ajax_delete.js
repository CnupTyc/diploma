$(document).ready(function() {
    $("#search_results").on("click",".del-ajax",function(){
		var id_doctor = $(this).data("id"); 
		$.ajax({
				type: "DELETE",
				url: "/delete",
				data: { id_doctor: id_doctor },
				success: function(data) { console.log(data); }
			})
			.done(function(data) {
				$("#doctor-"+id_doctor).html('<div class="alert alert-success" role="alert">'+data+'</div>');
			});
	})


});
