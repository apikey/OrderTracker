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