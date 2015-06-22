
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
				"name": "order_status"
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
				"name": "shelf_location"
			}
		]
	} );

	$('#order_tracker').DataTable( {
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
} );

}(jQuery));

