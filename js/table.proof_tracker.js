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
				"name": "deposit_paid",
				"type": "select",
				options: [ { label: "Yes", value: "Yes" },
				           { label: "No", value: "No" } ]
			},
			{
				"label": "Proof Checktout Date",
				"name": "proof_checkout_date",
				"type": "date"
			},
			{
				"label": "Status",
				"name": "status",
				"type": "select",
				options: [  
							{ label: "Proofs Ordered", value: "Proofs Ordered"},
							{ label: "Proofs In Studio", value: "Proofs In Studio"},
							{ label: "Proofs In Studio, Client Notified", value: "Proofs In Studio, Client Notified" },
							{ label: "Proofs With Client", value: "Proofs With Client"},
							{ label: "Proofs With Client Over 2 Weeks", value: "Proofs With Client Over 2 Weeks"},
							{ label: "Proofs on Pixie Set, Client Notified", value: "Proofs on Pixie Set, Client Notified"} ]
			},
			{
				"label": "Notes", 
				"name": "notes"
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
