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
  "ligne_1" TEXT,
  "ligne_2" TEXT,
  "ligne_3" TEXT,
  "ligne_4" TEXT,
  "ligne_5" TEXT,
  "ligne_6" TEXT,
  "auteur_id" INTEGER NOT NULL REFERENCES "auteur"("id"),
  "tag_id" INTEGER NOT NULL REFERENCES "tag"("id"),
  "jour_id" INTEGER NOT NULL REFERENCES "jour"("id"),
  "mois_id" INTEGER NOT NULL REFERENCES "mois"("id")
);

COMMIT;
