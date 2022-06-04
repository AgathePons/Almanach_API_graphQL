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

INSERT INTO "entree" ("ligne_1", "ligne_2", "ligne_3", "ligne_4", "ligne_5", "ligne_6", "ligne_7", auteur_id, tag_id, jour_id, mois_id) VALUES
-- Charnier
('Ils courent', 'Ils sont tous proches maintenant', 'Il ne me reste que deux balles', 'Une pour le premier qui entrera', 'Et la suivante pour...', 'Stop', '', 1, 1, 1, 1),
('Noires pullulations', 'Ferments', 'Animalcules enfouies dans le terreau de la forêt', 'Regard sans fond', 'Plasme omniscient', 'Shub-Niggurath veille', '', 1, 6, 2, 1),
-- Merdier
('Elle m''a demandé de tirer', 'Une lame du Tarot de l''Oubli', 'J''ai tiré la Mort', 'Fichtre !', 'Comment ai-je pu oublier', 'Que j''étais la Mort ?', '', 3, 5, 1, 2),
('Nous nous couvrîmes', 'De carcasses d''animaux', 'Pour apaiser leur colère', 'Mais les horlas', 'Ne sont pas dupes...', '', '', 4, 6, 2, 2),
-- Marche
('Palétuviers', 'Sentiers nénuphars', 'Clairières de lentilles d''eau', 'Murs de prêles', 'Et buttes de vase', 'Le marais', 'était une grande forêt saumâtre', 1, 2, 1, 3),
('Je suis un nomade', 'Je ne laisse pas de trace', 'Je vis au jour le jour', 'Demain', 'Je serai peut-être mort', 'Nul ne se souviendra', 'de mon passage', 1, 1, 2, 3),
-- Péril
('Plus haute que les arbres', 'Plus ancienne qu''eux', 'Dominante', 'Sachant tout', 'Son regard me cloue', 'Voit à travers mes mensonges', 'La Statue', 1, 6, 1, 4),
('Ils prennent la mémoire', 'Dans leurs collets', 'Achèvent le seigneur à l''agonie', 'Piègent la civilisation', 'Dans des fosses', 'Braconniers du futur', '', 1, 1, 2, 4),
-- Messe
('Depuis que je suis aveugle', 'Je ressens l''égrégore', 'Je vois les émotions', 'Je lis dans le passé, le futur', 'J''ai bien fait de me crever les yeux !', '', '', 1, 5, 1, 5),
('Seul passage à travers la forêt', 'Source de vie', 'L''endroit à traverser pour effacer ses traces', 'La rivière est un espoir', 'Et aussi un piège', '', '', 1, 2, 2, 5),
('Hue, hue, hue !', 'Les enfants font la chasse au Dahu', 'Oh, oh, oh !', 'Ils en abandonnent un là-haut', 'Dia, dia, dia !', 'Il sera la proie du Horla', '', 1, 6, 3, 5),
('J''ai vu marcher', 'De noirs cœlacanthes', 'J''ai vu glisser', 'Des limaces sans forme', 'J''ai vu frissonner', 'La chair des anémones', 'La forêt de corail', 1, 2, 4, 5);

COMMIT;
