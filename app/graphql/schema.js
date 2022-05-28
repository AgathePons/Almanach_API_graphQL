module.exports = `
  # Liste des queries
  type Query {
    # Liste des auteurs
    auteurs: [Auteur]
    # Liste des tags
    tags: [Tag]
    # Un tag par son id
    #tag(id: !ID): Tag
    # Liste des jours
    jours: [Jour]
    # Liste des mois
    mois: [Mois]
    # Liste des entrées
    entrees: [Entree]
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
  }
`;
