$(document).ready(function() {
    $(".add-ajax").click(function(){
	insertData();
});
});
 
function insertData() {
			var Spec=$("#spec_doc").val();
			var FIO=$("#fio_doc").val();
			var Phone=$("#phone_doc").val();
			var Kab=$("#kab_doc").val();
			var Level=$("#level_doc").val();
			var Uch=$("#uch_doc").val();
			$(".in").val('');
		 
		// AJAX code to send data to php file.
        $.ajax({
            type: "put",
            url: "/add",
            data: {Spec:Spec,FIO:FIO,Phone:Phone, Kab:Kab, Level:Level, Uch:Uch},
            dataType: "JSON",
			success: function(data) { console.log(data); }
                })
                .done(function(message){
                    console.log(message);
                    alert(message);
                });
                return false;
        }