module.exports = `
  # Liste des queries
  type Query {
    # Liste des auteurs
    auteurs: [Auteur]
    # Liste des tags
    tags: [Tag]
    # Liste des jours
    jours: [Jour]
    # Liste des mois
    mois: [Mois]
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
    text: String!
  }
`;
