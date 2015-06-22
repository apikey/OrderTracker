<?php

/*
 * Editor server script for DB table order_tracker
 * Created by http://editor.datatables.net/generator
 */

date_default_timezone_set('America/Chicago');
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
Editor::inst( $db, 'shoot_tracker', 'shoot_number' )
	->fields
	(
		Field::inst( 'shoot_number' ),
		Field::inst( 'shoot_processed_date' ),
		Field::inst( 'status' )
	)
	->process( $_POST )
	->json();
