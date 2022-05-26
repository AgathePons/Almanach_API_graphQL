-- Deploy almanach:init to pg

BEGIN;

CREATE TABLE "auteur" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "pseudo" TEXT NOT NULL UNIQUE
);

CREATE TABLE "tag" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "tag" TEXT NOT NULL UNIQUE
);

CREATE TABLE "jour" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "numero" TEXT NOT NULL UNIQUE
);

CREATE TABLE "mois" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "label" TEXT NOT NULL UNIQUE
);

CREATE TABLE "entree" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "ligne 1" TEXT,
  "ligne 2" TEXT,
  "ligne 3" TEXT,
  "ligne 4" TEXT,
  "ligne 5" TEXT,
  "ligne 6" TEXT,
  "auteur_id" INTEGER NOT NULL REFERENCES "auteur"("id"),
  "tag_id" INTEGER NOT NULL REFERENCES "tag"("id"),
  "jour_id" INTEGER NOT NULL REFERENCES "jour"("id"),
  "mois_id" INTEGER NOT NULL REFERENCES "mois"("id")
);

COMMIT;