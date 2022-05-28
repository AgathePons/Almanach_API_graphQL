-- Verify almanach:jour_numero_to_number on pg

BEGIN;

SELECT numero FROM jour WHERE false;

ROLLBACK;
