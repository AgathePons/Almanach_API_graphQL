-- Deploy almanach:jour_numero_to_number to pg

BEGIN;

ALTER TABLE jour
ALTER COLUMN numero TYPE INTEGER USING numero::integer;

COMMIT;
