-- Revert almanach:add_line_7 from pg

BEGIN;

ALTER TABLE entree DROP COLUMN ligne_7;

COMMIT;
