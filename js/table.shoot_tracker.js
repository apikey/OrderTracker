(function($){

$(document).ready(function() {


	var editor = new $.fn.dataTable.Editor( {
		"ajax": "php/table.shoot_tracker.php",
		"table": "#shoot_tracker",
		"fields": [
			{
				"label": "Shoot Number",
				"name": "shoot_number"
			},
			{
				"label": "Shoot Processed Date",
				"name": "shoot_processed_date", 
				"type": "date"
			},
			{
				"label": "Status",
				"name": "status"
			}
		]
	} );

	$('#shoot_tracker').DataTable( {
		"dom": "Tflrtip",
		"ajax": "php/table.shoot_tracker.php",
		"columns": [
			{
				"data": "shoot_number"
			},
			{
				"data": "shoot_processed_date"
			},
			{
				"data": "status"
			}
		],
		"tableTools": {
			"sRowSelect": "os",
			"aButtons": [
				{ "sExtends": "editor_create", "editor": editor },
				{ "sExtends": "editor_edit",   "editor": editor },
				{ "sExtends": "editor_remove", "editor": editor }
			]
		}
	} );
} );

}(jQuery));
