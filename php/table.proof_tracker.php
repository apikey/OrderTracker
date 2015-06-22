<?php

/*
 * Editor server script for DB table order_tracker
 * Created by http://editor.datatables.net/generator
 */

// DataTables PHP library and database connection
include( "lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Join,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate;


// Build our Ed itor instance and process the data coming from _POST
Editor::inst( $db, 'proof_tracker', 'client' )
	->fields
	(
		Field::inst( 'client'			),
		Field::inst( 'phone' 			),
		Field::inst( 'email' 			),
		Field::inst( 'shoot_number'		),
		Field::inst( 'deposit_paid' 	),
		Field::inst( 'proof_checkout_date' 			),
		Field::inst( 'status' 	)
	)
	->process( $_POST )
	->json();
