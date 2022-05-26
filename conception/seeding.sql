BEGIN;

TRUNCATE entree, mois, jour, tag, auteur RESTART IDENTITY;

INSERT INTO "auteur" (pseudo) VALUES
('Thomas Munier'),
('Arjuna Khan'),
('Antoine « Kirdinn » Nobilet'),
('Weeping Jay');

INSERT INTO "tag" (tag) VALUES
('Ruine'),
('Forêt'),
('Oubli'),
('Emprise'),
('Égrégore'),
('Horlas');

INSERT INTO "jour" (numero) VALUES
('1'),
('2'),
('3'),
('4'),
('5'),
('6'),
('7'),
('8'),
('9'),
('10'),
('11'),
('12'),
('13'),
('14'),
('15'),
('16'),
('17'),
('18'),
('19'),
('20'),
('21'),
('22'),
('23'),
('24'),
('25'),
('26'),
('27'),
('28'),
('29'),
('30'),
('31');

INSERT INTO "mois" (label) VALUES
('Charnier'),
('Merdier'),
('Marche'),
('Péril'),
('Messe'),
('Chien'),
('Vrillette'),
('Outre'),
('Serpente'),
('Opprobre'),
('Vomembres'),
('Descendres');

INSERT INTO "entree" ("ligne 1", "ligne 2", "ligne 3", "ligne 4", "ligne 5", "ligne 6", auteur_id, tag_id, jour_id, mois_id) VALUES
-- Charnier
('Ils courent', 'Ils sont tous proches maintenant', 'Il ne me reste que deux balles', 'Une pour le premier qui entrera', 'Et la suivante pour...', 'Stop', 1, 1, 1, 1),
('Noires pullulations', 'Ferments', 'Animalcules enfouies dans le terreau de la forêt', 'Regard sans fond', 'Plasme omniscient', 'Shub-Niggurath veille', 1, 6, 2, 1),
-- Merdier
('Elle m''a demandé de tirer', 'Une lame du Tarot de l''Oubli', 'J''ai tiré la Mort', 'Fichtre !', 'Comment ai-je pu oublier', 'Que j''étais la Mort ?', 3, 5, 1, 2),
('Nous nous couvrîmes', 'De carcasses d''animaux', 'Pour apaiser leur colère', '', 'Mais les horlas', 'Ne sont pas dupes...', 4, 6, 2, 2),
-- Marche
('Palétuviers', 'Sentiers nénuphars', 'Clairières de lentilles d''eau', 'Murs de prêles', 'Et buttes de vase', 'Le marais était une grande forêt saumâtre', 1, 2, 1, 3),
('Je suis un nomade', 'Je ne laisse pas de trace', 'Je vis au jour le jour', 'Demain', 'Je serai peut-être mort', 'Nul ne se souviendra  de mon passage', 1, 1, 2, 3),
-- Péril
('Plus haute que les arbres', 'Plus ancienne qu''eux', 'Dominante, sachant tout', 'Son regard me cloue', 'Voit à travers mes mensonges', 'La Statue', 1, 6, 1, 4),
('Ils prennent la mémoire', 'Dans leurs collets', 'Achèvent le seigneur à l''agonie', 'Piègent la civilisation', 'Dans des fosses', 'Braconniers du futur', 1, 1, 2, 4);

COMMIT;
