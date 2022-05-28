-- Revert almanach:jour_numero_to_number from pg

BEGIN;

ALTER TABLE jour
ALTER COLUMN numero TYPE TEXT;

COMMIT;
