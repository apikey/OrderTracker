<?php if (!defined('DATATABLES')) exit(); // Ensure being used in DataTables env.

// Enable error reporting for debugging (remove for production)
error_reporting(E_ALL);
ini_set('display_errors', '1');


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Database user / pass
 */

// HAYNSWORTH VERSION
$sql_details = array(
	"type" => "Mysql",  // Database type: "Mysql", "Postgres", "Sqlite" or "Sqlserver"
	"user" => "joe",       // Database user name
	"pass" => "@Lpha2727",       // Database password
	"host" => "192.168.2.101",       // Database host
	"port" => "3306",       // Database connection port (can be left empty for default)
	"db"   => "haynsworth",       // Database name
	"dsn"  => "charset=utf8"        // PHP DSN extra information. Set as `charset=utf8` if you are using MySQL
);

// DEMO VERSION
/*
$sql_details = array(
	"type" => "Mysql",  // Database type: "Mysql", "Postgres", "Sqlite" or "Sqlserver"
	"user" => "root",       // Database user name
	"pass" => "gamma1631",       // Database password
	"host" => "localhost",       // Database host
	"port" => "3306",       // Database connection port (can be left empty for default)
	"db"   => "datatables_demo",       // Database name
	"dsn"  => "charset=utf8"        // PHP DSN extra information. Set as `charset=utf8` if you are using MySQL
);
*/

date_default_timezone_set('America/Chicago');

