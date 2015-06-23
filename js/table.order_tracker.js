
/*
 * Editor client script for DB table order_tracker
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		"ajax": "php/table.order_tracker.php",
		"table": "#order_tracker",
		"fields": [
			{
				"label": "Invoice",
				"name": "invoice"
			},
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
				"label": "Order Status",
				"name": "order_status", 
				"type": "select",
				options: [
							{ label: 'In Progress', value: 'In Progress'},
							{ label: 'Sent to Jo-Ann for Retouching', value: 'Sent to Jo-Ann for Retouching'},
							{ label: 'Awaiting Approval from Client', value: 'Awaiting Approval from Client'},
							{ label: 'Awaiting Retouch Approval from Client', value: 'Awaiting Retouch Approval from Client'},
							{ label: 'Ordered from Pounds Labs', value: 'Ordered from Pounds Labs'},
							{ label: 'Ordered from BWC', value: 'Ordered from BWC'},
							{ label: 'Ordered from Bay Photo', value: 'Ordered from Bay Photo'},
							{ label: 'Picture(s) Being Framed', value: 'Picture(s) Being Framed'},
							{ label: 'Order in Studio, Not Ready', value: 'Order in Studio, Not Ready'},
							{ label: 'Order Ready for Client Pick Up', value: 'Order Ready for Client Pick Up'},
							{ label: 'Order Ready, Client Contacted to Pick Up', value: 'Order Ready, Client Contacted to Pick Up'},
							{ label: 'Order Ready, Left Message and/or Sent Email to Client', value: 'Order Ready, Left Message and/or Sent Email to Client'},
							{ label: 'Other (add details in "Notes" field)', value: 'Other (add details in "Notes" field)'}
				]
			},
			{
				"label": "Notes",
				"name": "notes"
			},
			{
				"label": "Balance",
				"name": "balance"
			},
			{
				"label": "Shelf Location",
				"name": "shelf_location",
				"type": "select",
				options: [ 
							{ label: 'Not In Studio Yet', value: 'Not In Studio Yet' },
							{ label: 'A, B, C, D, E, F', value: 'A, B, C, D, E, F' },
							{ label: 'G, H, I, J, K, L', value: 'G, H, I, J, K, L' },
							{ label: 'M, N, O, P', value: 'M, N, O, P' },
							{ label: 'Q, R, S, T', value: 'Q, R, S, T' },
							{ label: 'U, V, W, X, Y, Z', value: 'U, V, W, X, Y, Z' },
							{ label: 'Large Items', value: 'Large Items' },
							{ label: 'Production Table', value: 'Production Table' },
							{ label: 'Black Wire Shelf', value: 'Black Wire Shelf' }
				]
			}
		]
	} );

	var orderTrackerTable = $('#order_tracker').DataTable( {
		"dom": "Tflrtip",
		"ajax": "php/table.order_tracker.php",
		"columns": [
			{
				"data": "invoice"
			},
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
				"data": "order_status"
			},
			{
				"data": "notes"
			},
			{
				"data": "balance", "render": $.fn.dataTable.render.number(',','.', 2,'$')
			},
			{
				"data": "shelf_location"
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
	//$.getScript("dataTables.fixedHeader.js", function () { alert("Script loaded."); });
	// var fixedHeader = new $.fn.dataTable.FixedHeader( orderTrackerTable );
} );

}(jQuery));

