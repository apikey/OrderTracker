<?php
// OrderTracker.php

// DataTables PHP library
include("DataTables.php");

use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Join,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate;

// *** first arg: $db variable automatically defined as an instance of the Database() class
// which was used along with the $sql_details variable to establish a connection with the
// database automatically.
// The $db variable is defined in the 'Bootstrap.php' library fiel and the variable name
// can be changed there if you require.
// *** second arg: the database table name that the Editor instance will operate on.
// *** third arg (optional): specifies the primary key of the table -- the default is 'id'.
Editor::inst($db, 'order_tracker', 'invoice')
		->fields(
			Field::inst('invoice')->validator('Valdiate::notEmpty'),
			Field::inst('client')->validator('Validate::notEmpty'),
			Field::inst('phone'),
			Field::inst('email'),
			Field::inst('order_status'),
			Field::inst('notes'),
			Field::inst('balance')->validator('Validate::numeric'),
			Field::inst('shelf_location')
		)
		->process($_POST)
		->json();