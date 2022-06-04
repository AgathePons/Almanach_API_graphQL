-- Deploy almanach:add_line_7 to pg

BEGIN;

ALTER TABLE entree ADD COLUMN ligne_7 TEXT;

COMMIT;
