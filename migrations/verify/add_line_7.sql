-- Verify almanach:add_line_7 on pg

BEGIN;

SELECT ligne_7 FROM entree WHERE false;

ROLLBACK;
