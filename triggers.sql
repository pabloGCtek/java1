CREATE OR REPLACE PROCEDURE instert_mov(idCuenta INTEGER, mont NUMERIC,)
AS $$
BEGIN 
IF (SELECT saldo FROM cuentas WHERE cuenta_id = idManda) < mont
THEN
RAISE SQLSTATE '22012';
ROLLBACK;

END IF;
UPDATE cuentas SET saldo = saldo - mont WHERE cuenta_id = idManda;
UPDATE cuentas SET saldo = saldo + mont WHERE cuenta_id = idRecibe;
INSERT INTO movimientos (tipo,monto) VALUES ('transaccion',mont);

EXCEPTION
WHEN SQLSTATE  '22012' THEN
RAISE NOTICE 'Saldo insuficiente';
WHEN OTHERS THEN
RAISE NOTICE 'ERROR';

COMMIT;

END;
$$ LANGUAGE plpgsql;



CREATE OR REPLACE PROCEDURE ing_o_ret(idCuenta INTEGER, mont INTEGER ,esIngreso BOOLEAN)
AS $$
BEGIN 
IF mont <= 0
THEN 
RAISE SQLSTATE '22013';
ROLLBACK;
END IF;

IF esIngreso = false 
THEN
	IF (SELECT saldo FROM cuentas WHERE cuenta_id = idCuenta) < mont
	THEN
	RAISE SQLSTATE '22012';
	ROLLBACK;
	END IF;
UPDATE cuentas SET saldo = saldo - mont WHERE cuenta_id = idCuenta;
INSERT INTO movimientos (tipo,monto) VALUES ('Retirada',mont);
ELSE
UPDATE cuentas SET saldo = saldo + mont WHERE cuenta_id = idCuenta;
INSERT INTO movimientos (tipo,monto) VALUES ('Ingreso',mont);
END IF;
EXCEPTION
WHEN SQLSTATE  '22012' THEN
RAISE NOTICE 'Saldo insuficiente';
WHEN SQLSTATE  '22013' THEN
RAISE NOTICE  'Monto invalido';
WHEN OTHERS THEN
RAISE NOTICE 'ERROR';

COMMIT;

END;
$$ LANGUAGE plpgsql;


CALL ing_o_ret(1,-5,true);
SELECT * from cuentas;

SELECT * from movimientos;


CREATE OR REPLACE TRIGGER inserTrigger
AFTER update ON cuentas
FOR EACH ROW 
execute procedure creaMov();
END;

CREATE OR REPLACE FUNCTION creaMov() 
RETURNS TRIGGER AS $$

DECLARE 
	diff numeric;
BEGIN
	diff := NEW.saldo - OLD.saldo;
if diff < 0 THEN
	diff := -diff;
	INSERT INTO movimientos (tipo, monto) VALUES('Retirada', diff);
ELSE
	INSERT INTO movimientos (tipo, monto) VALUES('Ingreso', diff);
END IF;
END
$$
LANGUAGE plpgsql;

UPDATE cuentas SET saldo = 1000 WHERE cuenta_id = 1; 





CREATE OR REPLACE TRIGGER modTrigger
AFTER INSERT ON movimientos
execute procedure modificaCuenta();
END;


CREATE OR REPLACE FUNCTION modificaCuenta() 
RETURNS TRIGGER AS $$

IF NEW.tipo = 'Ingreso'
THEN
    UPDATE cuentas SET saldo = saldo+NEW.monto WHERE cuenta_id = NEW.id_cuenta; 
ELSIF NEW.tipo = 'Retirada'
    UPDATE cuentas SET saldo = saldo-NEW.monto WHERE cuenta_id = NEW.id_cuenta; 
END IF;
END
$$
LANGUAGE plpgsql;


