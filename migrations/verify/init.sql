-- Verify almanach:init on pg

BEGIN;

SELECT * FROM auteur WHERE false;
SELECT * FROM tag WHERE false;
SELECT * FROM jour WHERE false;
SELECT * FROM mois WHERE false;
SELECT * FROM entree WHERE false;

ROLLBACK;
