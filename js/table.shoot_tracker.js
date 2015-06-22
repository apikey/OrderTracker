(function($){

$(document).ready(function() {

	//$.fn.dataTable.moment('dddd, MMMM Do, YYYY');

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
				"name": "status",
				"type": "select",
				options: [ 	{ label: 'Shoot Loaded', value: 'Shoot Loaded' },
							{ label: 'Processed', value: 'Processed' },
							{ label: 'Proofs Ordered', value: 'Proofs Ordered' },
							{ label: 'Other', value: 'Other' } 
				]
			},
			{
				"label": "Notes",
				"name": "notes"
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
			},
			{
				"data": "notes"

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
