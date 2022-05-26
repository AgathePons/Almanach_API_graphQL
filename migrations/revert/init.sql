-- Revert almanach:init from pg

BEGIN;

DROP TABLE IF EXISTS "entree", "mois", "jour", "tag", "auteur";

COMMIT;
