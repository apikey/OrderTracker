use haynsworth;

DROP TABLE IF EXISTS address;
DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS email;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS phone;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS product_order;
DROP TABLE IF EXISTS shoot;

CREATE TABLE order_tracker
(
invoice INTEGER NOT NULL,
client VARCHAR(80) NOT NULL,
phone VARCHAR(80),
email VARCHAR(40),
order_status VARCHAR(40),
notes TEXT,
balance DECIMAL(10,2),
shelf_location VARCHAR(20),
PRIMARY KEY (invoice)
) AUTO_INCREMENT = 1;

CREATE TABLE proof_tracker
(
client VARCHAR(80) NOT NULL,
phone VARCHAR(40),
email VARCHAR(40),
shoot_number VARCHAR(40),
deposit_paid VARCHAR(10),
proof_checkout_date DATE,
status text
);

CREATE TABLE completed_orders
(
invoice INTEGER NOT NULL,
client VARCHAR(80) NOT NULL,
phone VARCHAR(80),
email VARCHAR(40),
order_status VARCHAR(40),
PRIMARY KEY (invoice)
) AUTO_INCREMENT = 1;

INSERT INTO order_tracker
VALUES
(33505, 'Theresa Vrij', '214-912-3994', 'theresa.vrij@att.net', 'Ready', 'Order ready for pick up.  Will reach out to her again to let her know. -JF 4/29/15', 0.00, 'V'),
(33520, 'Kerry Ann Pedigo', '214-803-8303', 'andreahpedigo@gmail.com;sydpedigo@gmail.com', 'Ready - Balance Due', 'Need to contact client. -JF', 162.38, 'P');