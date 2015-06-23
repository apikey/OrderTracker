PREPARE PROOFS_2WEEKS_OLD FROM
'SELECT client, status, proof_checkout_date FROM proof_tracker WHERE proof_checkout_date < NOW() - INTERVAL 14 DAY AND proof_checkout_date <> \'0000-00-00\'';


-- Insert deleted invoice from order_tracker into completed_orders when order is completed.
DELIMITER ;;
DROP TRIGGER IF EXISTS INSERT_INTO_COMPLETED_ORDERS;;
CREATE TRIGGER INSERT_INTO_COMPLETED_ORDERS 
BEFORE DELETE 
	ON order_tracker FOR EACH ROW
BEGIN
	INSERT INTO completed_orders
	(invoice, client, phone, email, order_status, notes, balance, shelf_location)
	VALUES
	(OLD.invoice, OLD.client, OLD.phone, OLD.email, OLD.order_status, OLD.notes, OLD.balance, OLD.shelf_location);
END;; 
DELIMITER ;

-- Insert deleted shoot tracker item and into proof_tracker when order shoot is deleted.
DELIMITER ;;
DROP TRIGGER IF EXISTS INSERT_INTO_PROOF_TRACKER;;
CREATE TRIGGER INSERT_INTO_PROOF_TRACKER
BEFORE DELETE
	ON shoot_tracker FOR EACH ROW
BEGIN
	INSERT INTO proof_tracker
	(shoot_number, status)
	VALUES
	(OLD.shoot_number, OLD.status);
END;;
DELIMITER ;

-- insert deleted proof_tracker item and into order_tracker when proof is deleted.
DELIMITER ;;
DROP TRIGGER IF EXISTS INSERT_INTO_ORDER_TRACKER;;
CREATE TRIGGER INSERT_INTO_ORDER_TRACKER
BEFORE DELETE
	ON proof_tracker FOR EACH ROW
BEGIN
	INSERT INTO order_tracker
	(client, phone, email, notes)
	VALUES
	(OLD.client, OLD.phone, OLD.email, OLD.status);
END;;
DELIMITER ;

-- date updated for order_tracker entry on date of update.