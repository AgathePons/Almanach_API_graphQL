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
('Ils courent', 'Ils sont tous proches maintenant', 'Il ne me reste que deux balles', 'Une pour le premier qui entrera', 'Et la suivante pour...', 'Stop', null, 1, 1, 1, 1),
('Noires pullulations', 'Ferments', 'Animalcules enfouies dans le terreau de la forêt', 'Regard sans fond', 'Plasme omniscient', 'Shub-Niggurath veille', null, 1, 6, 2, 1),
('Ramifications et rayonnements d''écorce', 'Noyau sphérique', 'Branches qui dardent à l''infini', 'Tumeurs', 'Craquelures et éclairs', 'L''Arbre-Soleil !', null, 1, 6, 3, 1),
('Je lui ai demandé de me tirer une lame', 'Dans le Tarot de l''Oubli', 'Elle a tiré la Mort', 'Saperlotte !', 'Comment j''ai pu oublier que j''étais mort ?', null, null, 1, 3, 4, 1),
-- Merdier
('Elle m''a demandé de tirer', 'Une lame du Tarot de l''Oubli', 'J''ai tiré la Mort', 'Fichtre !', 'Comment ai-je pu oublier', 'Que j''étais la Mort ?', null, 3, 5, 1, 2),
('Nous nous couvrîmes', 'De carcasses d''animaux', 'Pour apaiser leur colère', 'Mais les horlas', 'Ne sont pas dupes...', null, null, 4, 6, 2, 2),
('Tous alignés comme des rapaces', 'Me scrutant du haut de leur perchoir', 'Je croque dans un', 'Et à moi le septième ciel', 'Attends... ?', null, null, 2, 6, 3, 2),
('Un humain, laid, tordu', 'Maigrelet et sinistre', 'Voila tout ce que j''aime', 'Les douceurs d''autrefois', 'Se font trop rares, je crois', null, null, 2, 4, 4, 2),
-- Marche
('Palétuviers', 'Sentiers nénuphars', 'Clairières de lentilles d''eau', 'Murs de prêles', 'Et buttes de vase', 'Le marais', 'était une grande forêt saumâtre', 1, 2, 1, 3),
('Je suis un nomade', 'Je ne laisse pas de trace', 'Je vis au jour le jour', 'Demain', 'Je serai peut-être mort', 'Nul ne se souviendra', 'de mon passage', 1, 1, 2, 3),
('Rien n''est sacré', 'Les personnages', 'De Millevaux', 'Sont plus attachants', 'Une fois morts', 'Que vivants', null, 1, 1, 3, 3),
('Tout costume', 'est un déguisement', 'Toute éducation', 'Est un endoctrinement', 'Toute richesse', 'Est corruption', 'Ici, nous sommes vraiment libres', 1, 1, 4, 3),
-- Péril
('Plus haute que les arbres', 'Plus ancienne qu''eux', 'Dominante', 'Sachant tout', 'Son regard me cloue', 'Voit à travers mes mensonges', 'La Statue', 1, 6, 1, 4),
('Ils prennent la mémoire', 'Dans leurs collets', 'Achèvent le seigneur à l''agonie', 'Piègent la civilisation', 'Dans des fosses', 'Braconniers du futur', null, 1, 1, 2, 4),
('L''odeur de fumée', 'Le charbon de bois', 'Les troncs noirs', 'Les pleurs', 'La chair brûlée des hommes', 'Ici aussi', 'Le feu avait laissé sa marque', 1, 2, 3, 4),
('Plus haute que les arbres', 'Plus ancienne qu''eux', 'Dominante', 'Sachant tout', 'Son regard me cloue', 'Voit à travers mes mensonges', 'La Statue', 1, 3, 4, 4),
-- Messe
('Depuis que je suis aveugle', 'Je ressens l''égrégore', 'Je vois les émotions', 'Je lis dans le passé, le futur', 'J''ai bien fait de me crever les yeux !', null, null, 1, 5, 1, 5),
('Seul passage à travers la forêt', 'Source de vie', 'L''endroit à traverser pour effacer ses traces', 'La rivière est un espoir', 'Et aussi un piège', null, null, 1, 2, 2, 5),
('Hue, hue, hue !', 'Les enfants font la chasse au Dahu', 'Oh, oh, oh !', 'Ils en abandonnent un là-haut', 'Dia, dia, dia !', 'Il sera la proie du Horla', null, 1, 6, 3, 5),
('J''ai vu marcher', 'De noirs cœlacanthes', 'J''ai vu glisser', 'Des limaces sans forme', 'J''ai vu frissonner', 'La chair des anémones', 'La forêt de corail', 1, 2, 4, 5),
-- Chien
('Pourquoi ces fièvres nocturnes ?', 'Les horreurs dites sur moi ?', 'Pourquoi me réveillé-je', 'Chaque matin', 'Fourbu', 'Des plumes noires', 'Dans mon lit ?', 1, 6, 1, 6),
('Tout allait bien au village', 'Jusqu''au jour où', 'Nos femmes ont donné', 'Naissance', 'À des animaux', null, null, 1, 4, 2, 6),
('À l''abri de la forêt', 'Dans nos maisons', 'Entassant les choses', 'Qui nous seraient utiles un jour', 'Jusqu''à être submergés', 'Par une forêt d''objets', null, 1, 4, 3, 6),
('Des rivières de sueur', 'Des montagnes de membres', 'Des murailles de dents', 'Des buissons de poils', 'Des landes de lambeaux', 'Et des forêts de peau', null, 1, 2, 4, 6),
-- Vrillette
('Grenades-arbres', 'Humus truffé de mines antipersonnel', 'Fosses comme des bouches d''épieux', 'Lianes étrangleuses', 'Sonne la guérilla forestière !', null, null, 1, 2, 1, 7),
('Meuglements de bêtes', 'Et d''hommes devenus fous', 'Tremblement des feuilles', 'Il pleut à pierre fondre', 'La nuit !', 'La forêt de Creutzfeldt-Jakob', null, 1, 2, 2, 7),
('On nous disait clochards', 'Nous étions pionniers, libres', 'Chercheurs d''or', 'On nous disait fous', 'Nous étions les seuls', 'À pouvoir s''en sortir', null, 1, 1, 3, 7),
('Les cendres du mort', 'Avec ce four', 'J''en ferai un diamant', 'Avec cette terre', 'J''en ferai un arbre', 'Avec ce vin', 'J''en ferai un philtre de mémoire', 1, 3, 4, 7),
-- Outre
('J''ai cet eczéma au coude', 'Pourquoi ?', 'C''était un mauvais souvenir ?', 'Un sorcier a dû le voler', 'Pour nourrir sa magie', 'Du bon mana pour lui', null, 1, 3, 1, 8),
('La rivière dégorge', 'De squames et de sanie', 'Rampent des horlas', 'Hideux de verrues et de bourrelets', 'L''usine de peau s''est remise en marche !', null, null, 1, 4, 2, 8),
('La peur en voyant bouger', 'Ces arbres maigres et moussus', 'Puis la terreur', 'En réalisant que c''étaient', 'Les pattes grêles', 'D''un cerf trop grand !', null, 1, 6, 3, 8),
('Quand on a vu les premiers germes', 'Sortir des êtres et des choses', 'Il était trop tard', 'Il était déjà enraciné', 'En chacun de nous', 'Le champignon', null, 1, 4, 4, 8),
-- Serpente
('Au marché de la mémoire', 'Madeleines de Proust', 'Gâteaux d''anniversaire', 'Vin chagrin', 'Banquets régurgités', 'Hostie du pardon', 'Premières dents', 1, 3, 1, 9),
('Microbes de porcelaine', 'Graviers à pseudopodes', 'Limon vivant', 'Foraminifères', 'Cellules de pierre', 'Roche liquide', 'Minuscule emprise minérale', 1, 4, 2, 9),
('Les microbes que nous tuons', 'Les insectes que nous avalons', 'La viande que nous mangeons', 'Notre impact sur la forêt…', 'Toute vie est un crime', null, null, 1, 4, 3, 9),
('Tout est parti en vrille', 'Quand les gens', 'Se sont tous nourris', 'De cette bouillie blanche', 'Œuf, farine, lait', 'Protéines, vitamines', 'Soylent', 1, 4, 4, 9),
-- Vomembres
('Nous manipulons sans précaution', 'Des arbres miniatures', 'Qui sont des bombes', 'Des plumes', 'Ou des remèdes', 'Croissance, rétrécissement', 'Fiables ?', 1, 6, 1, 10),
('Le blast !', 'Tout implose dans ta tête', 'Ton corps', 'Grand moment', 'Douleur vertige cauchemar', 'Où la réalité du monde enfoui', 'T''apparaît toute nue !', 1, 1, 2, 10),
('La beauté du bois brûlé', 'Forêt de cendres', 'Fragments de feuilles parcheminées', 'Odeur d''holocauste', 'Ce que ça me rappelle', 'De l''ancien empire', null, 1, 4, 3, 10),
('Patiente collection', 'De ses peaux mortes', 'Et de ses cheveux tombés', 'Des kilos par an', 'Pour confectionner', 'Masques et homoncules', 'Sarcomantiques', 1, 1, 4, 10);

COMMIT;
