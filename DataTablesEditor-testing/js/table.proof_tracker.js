(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		"ajax": "php/table.proof_tracker.php",
		"table": "#proof_tracker",
		"fields": [
			{
				"label": "Client",
				"name": "client"
			},
			{
				"label": "Phone",
				"name": "phone"
			},
			{
				"label": "Email",
				"name": "email"
			},
			{
				"label": "Shoot Number",
				"name": "shoot_number"
			},
			{
				"label": "Deposit Paid",
				"name": "deposit_paid"
			},
			{
				"label": "Proof Checktout Date",
				"name": "proof_checkout_date",
				"type": "date"
			},
			{
				"label": "Status",
				"name": "status"
			}
		]
	} );

	$('#proof_tracker').DataTable( {
		"dom": "Tflrtip",
		"ajax": "php/table.proof_tracker.php",
		"columns": [
			{
				"data": "client"
			},
			{
				"data": "phone"
			},
			{
				"data": "email"
			},
			{
				"data": "shoot_number"
			},
			{
				"data": "deposit_paid"
			},
			{
				"data": "proof_checkout_date",
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
