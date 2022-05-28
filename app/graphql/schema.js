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
    entrees: [Entree]
    # Une entree par son id
    #entreeById(id: ID!): Entree
  }

  # Model auteurs
  type Auteur {
    id: ID!
    pseudo: String!
  }

  # Model tags
  type Tag {
    id: ID!
    tag: String!
  }

  # Model jours
  type Jour {
    id: ID!
    numero: Int!
  }

  # Model mois
  type Mois {
    id: ID!
    label: String!
  }

  # Model Entrees
  type Entree {
    id: ID!
    ligne_1: String!
    ligne_2: String!
    ligne_3: String!
    ligne_4: String!
    ligne_5: String!
    ligne_6: String!
    auteur_id: Int!
    tag_id: Int!
    jour_id: Int!
    mois_id: Int!
    tag: Tag
    auteur: Auteur
    jour: Jour
    mois: Mois
  }
`;
