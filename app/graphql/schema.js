module.exports = `
  # Liste des queries
  type Query {

    # Liste des auteurs
    auteurs: [Auteur]
    # Un auteur par son id
    auteurById(id: ID!): Auteur

    # Liste des tags
    tags: [Tag]
    # Un tag par son id
    tagById(id: ID!): Tag

    # Liste des jours
    jours: [Jour]
    # Un jour par son id
    jourById(id: ID!): Jour

    # Liste des mois
    mois: [Mois]
    # Un mois par son id
    moisById(id: ID!): Mois

    # Liste des entrées
    entrees(input: EntreesInput): [Entree]
    # Une entree par son id
    entreeById(id: ID!): Entree
    # Liste des entrées par auteur
    entreesByAuteur(auteur_id: Int!): [Entree]
    # Liste des entrées par tag
    entreesByTag(tag_id: Int!): [Entree]
    # Liste des entrées par jour
    entreesByJour(jour_id: Int!): [Entree]
    # Liste des entrées par mois
    entreesByMois(mois_id: Int!): [Entree]
    # Liste des entrees filtrées
    #entreesFiltered(tag_id: [Int]): [Entree]
  }

  ########################################

  # Filters & Inputs
  input EntreesInput {
    auteur: Int
    tag: Int
    mois: Int
  }


  ########################################
  # Model auteurs
  type Auteur {
    id: ID!
    pseudo: String!
    entrees: [Entree]
  }

  # Model tags
  type Tag {
    id: ID!
    tag: String!
    entrees: [Entree]
  }

  # Model jours
  type Jour {
    id: ID!
    numero: Int!
    entrees: [Entree]
  }

  # Model mois
  type Mois {
    id: ID!
    label: String!
    entrees: [Entree]
  }

  # Model Entrees
  type Entree {
    id: ID!
    ligne_1: String
    ligne_2: String
    ligne_3: String
    ligne_4: String
    ligne_5: String
    ligne_6: String
    ligne_7: String
    #auteur_id: Int!
    #tag_id: Int!
    #jour_id: Int!
    #mois_id: Int!
    tag: Tag
    auteur: Auteur
    jour: Jour
    mois: Mois
  }
`;
