-- 
-- Editor SQL for DB table order_tracker
-- Created by http://editor.datatables.net/generator
-- 

CREATE TABLE `order_tracker` (
	`invoice` int(10) NOT NULL auto_increment,
	`client` varchar(255),
	`phone` varchar(255),
	`email` varchar(255),
	`order_status` varchar(255),
	`notes` varchar(255),
	`balance` varchar(255),
	`shelf_location` varchar(255),
	PRIMARY KEY( `invoice` )
);