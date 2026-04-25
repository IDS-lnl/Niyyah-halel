const products = [
  {
    name: "Vanilla Whey Protein",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Aucun ingrédient critique détecté dans la formule analysée.",
    confidence: "Confiance 96 %",
    certification: "HFA validée",
    certificationNote:
      "Organisme : Halal Food Authority. Certificat fournisseur valide, numéro de lot contrôlé et origine des arômes documentée.",
    certifier: "Halal Food Authority",
    country: "Royaume-Uni",
    validity: "Certificat valide",
    reliabilityLabel: "Très élevée",
    reliabilityScore: 96,
    metadataMode: "verified",
    proofScore: "3 preuves trouvées",
    proof: [
      "Gélatine : non détectée",
      "Émulsifiants : origine végétale",
      "Certificat fournisseur à jour"
    ],
    justification:
      "Le verdict halal repose sur trois éléments concordants : composition sans ingrédient carné critique, origine végétale des additifs sensibles et présence d’un certificat halal valide pour cette référence.",
    alternative: {
      name: "Pure Whey Halal",
      store: "MyProtein",
      country: "Royaume-Uni",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : organisme halal reconnu, fiche ingrédients détaillée et traçabilité de la protéine.",
      details: [
        "Usage similaire pour le sport",
        "Certification halal disponible",
        "Composition détaillée et traçable"
      ]
    }
  },
  {
    name: "Fruit Candy Mix",
    tone: "haram",
    pill: "Ingrédient haram détecté",
    title: "Haram",
    text: "Présence probable d’un composant d’origine porcine dans la composition.",
    confidence: "Confiance 92 %",
    certification: "Aucune certification halal valide",
    certificationNote:
      "Aucun organisme halal reconnu indiqué sur l’emballage ou dans la documentation produit analysée.",
    certifier: "Aucun organisme reconnu",
    country: "France",
    validity: "Non applicable",
    reliabilityLabel: "Élevée",
    reliabilityScore: 92,
    metadataMode: "warning",
    proofScore: "2 alertes critiques",
    proof: [
      "Gélatine : origine porcine probable",
      "Aucune certification reconnue associée",
      "Vérification manuelle recommandée"
    ],
    justification:
      "Le produit est classé haram car la gélatine signalée n’est pas documentée comme bovine halal ou végétale, et aucune certification reconnue ne permet de lever le doute.",
    alternative: {
      name: "Fruity Soft Bites Halal",
      store: "Carrefour",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : certificat halal fournisseur affiché, gélifiant non porcin et composition vérifiée.",
      details: [
        "Texture proche sans gélatine porcine",
        "Disponible au rayon bonbons",
        "Certificat fournisseur vérifié"
      ]
    }
  },
  {
    name: "Creamy Caesar Sauce",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Certains ingrédients ont une origine variable selon le fournisseur.",
    confidence: "Confiance 74 %",
    certification: "Documentation incomplète",
    certificationNote:
      "Aucune certification halal exploitable trouvée. La fiche technique analysée ne précise pas l’origine de plusieurs additifs.",
    certifier: "Non communiqué",
    country: "France",
    validity: "Certification expir�e",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 74,
    metadataMode: "partial",
    proofScore: "3 points à vérifier",
    proof: [
      "Mono-diglycérides : source non précisée",
      "Arôme naturel : origine non détaillée",
      "Certification Certification expir�e depuis 2 mois"
    ],
    justification:
      "Le verdict douteux vient d’un manque de traçabilité. Les additifs ne sont pas forcément haram, mais leur origine n’est pas assez précise pour conclure halal avec confiance.",
    alternative: {
      name: "Tahini Herb Dressing",
      store: "Monoprix",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : recette courte, additifs limités et documentation fournisseur plus claire.",
      details: [
        "Usage similaire pour salades et wraps",
        "Profil de goût crémeux et épicé proche",
        "Ingrédients plus simples et mieux documentés"
      ]
    }
  },
  {
    name: "Greek Yogurt Strawberry",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Composition simple et certification valide détectée.",
    confidence: "Confiance 94 %",
    certification: "Certification halal européenne",
    certificationNote:
      "Organisme : European Halal Certification. Référence produit couverte par le certificat et lot compatible avec la fiche analysée.",
    certifier: "European Halal Certification",
    country: "Allemagne",
    validity: "Certificat valide",
    reliabilityLabel: "Très élevée",
    reliabilityScore: 94,
    metadataMode: "verified",
    proofScore: "3 preuves trouvées",
    proof: [
      "Ferments lactiques conformes",
      "Arôme d’origine végétale",
      "Certification valide sur le lot"
    ],
    justification:
      "Le yaourt est classé halal car les ferments et arômes sont documentés, aucun gélifiant critique n’apparaît, et la certification couvre bien la gamme concernée.",
    alternative: {
      name: "Strawberry Skyr Halal",
      store: "Auchan",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : gamme certifiée halal, recette courte et traçabilité des arômes.",
      details: [
        "Texture très proche",
        "Certification halal sur la gamme",
        "Composition courte et claire"
      ]
    }
  },
  {
    name: "Coca-Cola Original Taste",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Boisson analysée sans ingrédient carné détecté.",
    confidence: "Confiance 88 %",
    certification: "Analyse ingrédients",
    certificationNote:
      "Pas de certification halal affichée, mais la formule analysée ne contient pas d’ingrédient animal ou alcoolisé dans cette base démo.",
    certifier: "Analyse interne Niyyah",
    country: "France",
    validity: "Analyse r�cente",
    reliabilityLabel: "Élevée",
    reliabilityScore: 88,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Pas de gélatine détectée",
      "Formule boisson standard"
    ],
    justification:
      "Le verdict halal repose ici sur l’analyse de composition, pas sur un certificat. Aucun ingrédient critique identifiable n’apparaît dans la fiche produit utilisée.",
    alternative: {
      name: "Cola halal certifié",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Très élevée",
      certification:
        "Certification alternative : boisson certifiée halal par organisme partenaire et documentation accessible.",
      details: [
        "Goût proche",
        "Version certifiée disponible",
        "Lecture plus simple des ingrédients"
      ]
    }
  },
  {
    name: "Coca-Cola 33cl",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Boisson analysée sans ingrédient carné détecté.",
    confidence: "Confiance 88 %",
    certification: "Analyse ingrédients",
    certificationNote:
      "Pas de certification halal affichée, mais la formule analysée ne contient pas d’ingrédient animal ou alcoolisé dans cette base démo.",
    certifier: "Analyse interne Niyyah",
    country: "France",
    validity: "Analyse r�cente",
    reliabilityLabel: "Élevée",
    reliabilityScore: 88,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Pas de gélatine détectée",
      "Formule boisson standard"
    ],
    justification:
      "Le verdict halal repose ici sur l’analyse de composition, pas sur un certificat. Aucun ingrédient critique identifiable n’apparaît dans la fiche produit utilisée.",
    alternative: {
      name: "Cola halal certifié",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Très élevée",
      certification:
        "Certification alternative : boisson certifiée halal par organisme partenaire et documentation accessible.",
      details: [
        "Goût proche",
        "Version certifiée disponible",
        "Lecture plus simple des ingrédients"
      ]
    }
  },
  {
    name: "Fanta Orange",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Boisson gazeuse fruitée sans ingrédient animal détecté dans cette base.",
    confidence: "Confiance 86 %",
    certification: "Analyse ingrédients",
    certificationNote:
      "Aucune certification halal affichée, mais la composition consultée ne présente pas d’ingrédient carné ou gélifiant critique.",
    certifier: "Analyse interne Niyyah",
    country: "France",
    validity: "Analyse r�cente",
    reliabilityLabel: "Élevée",
    reliabilityScore: 86,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Pas de gélatine détectée",
      "Boisson fruitée standard"
    ],
    justification:
      "Le produit est classé halal sur la base de sa composition, sans ingrédient animal identifié dans la fiche locale utilisée.",
    alternative: {
      name: "Orange soda halal certifié",
      store: "Supermarché",
      country: "France",
      reliabilityLabel: "Très élevée",
      certification:
        "Certification alternative : boisson certifiée halal ou naturellement conforme selon gamme.",
      details: [
        "Goût proche",
        "Très disponible",
        "Composition lisible"
      ]
    }
  },
  {
    name: "Sprite",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Boisson citron-lime sans ingrédient animal détecté dans cette base.",
    confidence: "Confiance 87 %",
    certification: "Analyse ingrédients",
    certificationNote:
      "Pas de certification halal affichée, mais aucun ingrédient critique n’est visible dans la composition consultée.",
    certifier: "Analyse interne Niyyah",
    country: "France",
    validity: "Analyse r�cente",
    reliabilityLabel: "Élevée",
    reliabilityScore: 87,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Pas de gélatine détectée",
      "Formulation boisson standard"
    ],
    justification:
      "Le verdict halal repose sur l’absence d’ingrédient animal identifié et une formulation simple dans la fiche consultée.",
    alternative: {
      name: "Boisson citron halal",
      store: "Supermarché",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : boisson naturellement conforme avec formulation simple.",
      details: [
        "Goût proche",
        "Disponible partout",
        "Choix simple"
      ]
    }
  },
  {
    name: "Pepsi 33cl",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Boisson cola sans ingrédient carné détecté dans cette base locale.",
    confidence: "Confiance 87 %",
    certification: "Analyse ingrédients",
    certificationNote:
      "Aucune certification halal affichée, mais la fiche consultée ne montre pas d’ingrédient animal ou alcoolisé.",
    certifier: "Analyse interne Niyyah",
    country: "France",
    validity: "Analyse r�cente",
    reliabilityLabel: "Élevée",
    reliabilityScore: 87,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Pas de gélatine détectée",
      "Formule boisson standard"
    ],
    justification:
      "Le classement halal repose sur l’analyse compositionnelle locale, sans ingrédient critique identifié dans la fiche utilisée.",
    alternative: {
      name: "Cola halal certifié",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Très élevée",
      certification:
        "Certification alternative : boisson certifiée halal ou naturellement conforme selon gamme.",
      details: [
        "Goût proche",
        "Version certifiée disponible",
        "Composition claire"
      ]
    }
  },
  {
    name: "Red Bull 250ml",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Boisson énergisante avec plusieurs composants techniques à confirmer.",
    confidence: "Confiance 60 %",
    certification: "Documentation partielle",
    certificationNote:
      "La base locale n’apporte pas assez de clarté sur certains auxiliaires de fabrication et l’absence de certificat halal maintient un doute.",
    certifier: "Non communiqué",
    country: "Autriche",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 60,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Formule technique à confirmer",
      "Certification halal absente"
    ],
    justification:
      "Le doute vient moins d’un ingrédient explicitement haram que du manque de preuve détaillée sur une formule fonctionnelle plus complexe.",
    alternative: {
      name: "Boisson énergie halal",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : boisson certifiée halal avec composition plus lisible.",
      details: [
        "Usage proche",
        "Certification halal",
        "Choix plus rassurant"
      ]
    }
  },
  {
    name: "Monster Energy",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Boisson énergisante complexe sans certification halal claire dans cette base.",
    confidence: "Confiance 59 %",
    certification: "Documentation partielle",
    certificationNote:
      "La fiche locale ne documente pas suffisamment les composants techniques et ne montre pas de certificat halal officiel.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 59,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Formule complexe à confirmer",
      "Certification halal absente"
    ],
    justification:
      "Le produit reste douteux à cause d’un manque de transparence documentaire sur une boisson fonctionnelle très transformée.",
    alternative: {
      name: "Boisson énergie halal",
      store: "Supermarché",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : alternative certifiée halal avec composition mieux documentée.",
      details: [
        "Usage similaire",
        "Certification visible",
        "Traçabilité meilleure"
      ]
    }
  },
  {
    name: "Evian Eau Minérale Naturelle",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Eau minérale sans ingrédient sensible.",
    confidence: "Confiance 99 %",
    certification: "Naturellement conforme",
    certificationNote:
      "Aucune certification halal requise dans ce cas. Produit composé uniquement d’eau minérale naturelle sans additif.",
    certifier: "Non requis",
    country: "France",
    validity: "Conforme sur cette composition",
    reliabilityLabel: "Très élevée",
    reliabilityScore: 99,
    metadataMode: "natural",
    proofScore: "2 preuves trouvées",
    proof: [
      "Aucun additif animal",
      "Eau minérale naturelle"
    ],
    justification:
      "L’eau est classée halal car sa composition ne contient qu’un ingrédient naturellement conforme, sans transformation impliquant un composant critique.",
    alternative: {
      name: "Volvic Eau Naturelle",
      store: "Supermarché",
      country: "France",
      reliabilityLabel: "Très élevée",
      certification:
        "Certification alternative : non nécessaire, composition identique de type eau naturelle sans additif.",
      details: [
        "Usage identique",
        "Très largement disponible",
        "Composition simple"
      ]
    }
  },
  {
    name: "Nutella",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Produit généralement compatible, mais validation fournisseur à confirmer selon marché.",
    confidence: "Confiance 67 %",
    certification: "Certification non affichée",
    certificationNote:
      "Aucun certificat halal officiel visible dans cette base. Certains émulsifiants et arômes demandent une confirmation fabricant selon le pays.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer selon lot",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 67,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Émulsifiant à confirmer selon lot",
      "Certification halal non visible"
    ],
    justification:
      "Le produit n’est pas classé haram, mais il n’y a pas assez de preuve pour le déclarer halal de manière ferme. La prudence vient surtout du manque de certification claire.",
    alternative: {
      name: "Pâte à tartiner halal certifiée",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : logo halal visible, documentation fabricant disponible et ingrédients plus simples.",
      details: [
        "Texture proche",
        "Certification halal explicite",
        "Composition plus lisible"
      ]
    }
  },
  {
    name: "Nutella 400g",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Version 400 g généralement compatible, mais sans certification halal claire sur cette base locale.",
    confidence: "Confiance 68 %",
    certification: "Certification non affichée",
    certificationNote:
      "Aucun certificat halal officiel visible pour ce format. Certains émulsifiants et arômes doivent être confirmés selon le marché.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer selon lot",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 68,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Émulsifiant à confirmer selon lot",
      "Certification halal non visible"
    ],
    justification:
      "Le produit n’est pas classé haram, mais la base ne contient pas assez de preuves robustes pour le déclarer halal avec certitude.",
    alternative: {
      name: "Pâte à tartiner halal certifiée",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : logo halal visible, documentation fabricant disponible et ingrédients plus simples.",
      details: [
        "Texture très proche",
        "Certification halal explicite",
        "Composition plus lisible"
      ]
    }
  },
  {
    name: "Kinder Bueno",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Produit sucré courant, mais certains arômes et émulsifiants demandent une vérification.",
    confidence: "Confiance 64 %",
    certification: "Documentation limitée",
    certificationNote:
      "Aucun certificat halal exploitable trouvé. Les arômes et additifs ne sont pas assez détaillés dans cette base locale.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer selon lot",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 64,
    metadataMode: "partial",
    proofScore: "3 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Émulsifiants à tracer",
      "Aucune certification visible"
    ],
    justification:
      "Le produit est classé douteux faute de traçabilité complète sur les arômes et additifs. Rien ne permet ici d’affirmer un statut halal ferme.",
    alternative: {
      name: "Barre chocolatée halal",
      store: "Carrefour",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : version certifiée halal, formulation plus claire et origine des ingrédients mieux documentée.",
      details: [
        "Goût chocolat-noisette proche",
        "Version certifiée disponible",
        "Ingrédients plus faciles à tracer"
      ]
    }
  },
  {
    name: "Kinder Surprise",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Produit chocolaté populaire, mais sans certification halal claire dans cette base.",
    confidence: "Confiance 63 %",
    certification: "Certification non affichée",
    certificationNote:
      "Pas d’organisme halal indiqué. La composition semble globalement simple, mais certains arômes restent insuffisamment documentés.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 63,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Certification halal absente"
    ],
    justification:
      "Le classement douteux reflète surtout l’absence de certification et de traçabilité complète sur certains composants secondaires.",
    alternative: {
      name: "Œuf chocolat halal",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : produit certifié halal avec composition et arômes mieux documentés.",
      details: [
        "Expérience sucrée proche",
        "Certification visible",
        "Choix plus rassurant"
      ]
    }
  },
  {
    name: "Kinder Maxi",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Barre chocolatée sans alerte directe, mais documentation insuffisante pour conclure halal.",
    confidence: "Confiance 62 %",
    certification: "Documentation partielle",
    certificationNote:
      "Absence de certificat halal et détail insuffisant sur certains arômes ou auxiliaires technologiques.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À vérifier",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 62,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes non entièrement détaillés",
      "Certification absente"
    ],
    justification:
      "Le produit reste douteux par prudence, principalement à cause du manque de certification exploitable et d’informations techniques complètes.",
    alternative: {
      name: "Barre lait halal",
      store: "Auchan",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : barre certifiée halal avec ingrédients simples et plus transparents.",
      details: [
        "Texture proche",
        "Version certifiée halal",
        "Plus facile à valider"
      ]
    }
  },
  {
    name: "Ferrero Rocher",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Confiserie premium sans alerte immédiate, mais certification halal non visible.",
    confidence: "Confiance 65 %",
    certification: "Certification non affichée",
    certificationNote:
      "Pas de certificat halal officiel dans cette base locale. Certains arômes et auxiliaires de fabrication doivent être confirmés.",
    certifier: "Non communiqué",
    country: "Italie",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 65,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Certification halal absente"
    ],
    justification:
      "Le classement douteux vient surtout du manque de preuve officielle, pas d’une alerte franche sur un ingrédient clairement haram.",
    alternative: {
      name: "Praliné halal certifié",
      store: "Monoprix",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : produit certifié halal avec profil chocolat-noisette proche.",
      details: [
        "Goût praliné proche",
        "Certification visible",
        "Meilleure traçabilité"
      ]
    }
  },
  {
    name: "Nutella Biscuits",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Biscuit fourré populaire, mais sans certification halal claire dans cette base.",
    confidence: "Confiance 64 %",
    certification: "Certification non affichée",
    certificationNote:
      "Aucun organisme halal visible. La composition détaillée ne permet pas de lever complètement le doute sur certains arômes.",
    certifier: "Non communiqué",
    country: "Italie",
    validity: "À confirmer selon lot",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 64,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Certification halal absente"
    ],
    justification:
      "Le biscuit n’est pas signalé comme haram, mais il manque une preuve forte pour conclure halal avec un bon niveau de confiance.",
    alternative: {
      name: "Biscuits fourrés halal",
      store: "Carrefour",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : biscuits certifiés halal, composition plus claire et goût proche.",
      details: [
        "Texture similaire",
        "Certification halal",
        "Choix plus rassurant"
      ]
    }
  },
  {
    name: "Oreo Original",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Biscuit sucré sans ingrédient carné détecté sur cette base de démonstration.",
    confidence: "Confiance 86 %",
    certification: "Lecture ingrédients",
    certificationNote:
      "Pas de certificat halal affiché, mais la fiche utilisée ne montre aucun ingrédient animal ou gélifiant critique.",
    certifier: "Analyse interne Niyyah",
    country: "France",
    validity: "Analyse r�cente",
    reliabilityLabel: "Élevée",
    reliabilityScore: 86,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Pas de gélatine détectée",
      "Formule biscuit standard"
    ],
    justification:
      "Le verdict halal repose sur une composition sans ingrédient carné identifié et sans additif animal critique visible dans la fiche consultée.",
    alternative: {
      name: "Biscuit cacao halal",
      store: "Auchan",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : version certifiée halal, formulation cacao proche et meilleure traçabilité.",
      details: [
        "Goût cacao proche",
        "Version certifiée possible",
        "Facile à trouver"
      ]
    }
  },
  {
    name: "Milka Lait",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Chocolat au lait sans alerte directe, mais absence de certification halal exploitable.",
    confidence: "Confiance 66 %",
    certification: "Certification non affichée",
    certificationNote:
      "Aucune certification halal indiquée dans la base. Certains arômes ou auxiliaires ne sont pas assez détaillés.",
    certifier: "Non communiqué",
    country: "Allemagne",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 66,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Certification absente"
    ],
    justification:
      "Le produit reste douteux par prudence, essentiellement à cause du manque de preuve officielle et non d’un ingrédient haram clairement identifié.",
    alternative: {
      name: "Tablette lait halal",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : tablette certifiée halal avec profil chocolat au lait proche.",
      details: [
        "Goût très proche",
        "Certification visible",
        "Composition plus claire"
      ]
    }
  },
  {
    name: "Milka Oreo",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Produit combiné chocolat-biscuit avec plusieurs arômes à confirmer.",
    confidence: "Confiance 61 %",
    certification: "Documentation limitée",
    certificationNote:
      "Aucune certification halal officielle visible et combinaison d’ingrédients plus complexe à valider.",
    certifier: "Non communiqué",
    country: "Allemagne",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 61,
    metadataMode: "partial",
    proofScore: "3 points à vérifier",
    proof: [
      "Arômes multiples à confirmer",
      "Additifs à tracer",
      "Certification absente"
    ],
    justification:
      "Le verdict douteux s’explique par une formulation plus complexe que la version simple, avec davantage de composants non documentés.",
    alternative: {
      name: "Tablette biscuit halal",
      store: "Auchan",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : produit certifié halal avec profil biscuit-chocolat proche.",
      details: [
        "Goût similaire",
        "Certification halal",
        "Traçabilité meilleure"
      ]
    }
  },
  {
    name: "Toblerone",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Chocolat au miel et amandes sans preuve halal suffisante dans cette base.",
    confidence: "Confiance 65 %",
    certification: "Certification non affichée",
    certificationNote:
      "Pas d’organisme halal mentionné. Certains arômes et auxiliaires de fabrication restent à confirmer.",
    certifier: "Non communiqué",
    country: "Suisse",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 65,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Certification absente"
    ],
    justification:
      "Le produit est classé douteux par manque de preuve formelle, non parce qu’un ingrédient clairement haram a été identifié dans cette base.",
    alternative: {
      name: "Triangle chocolat halal",
      store: "Monoprix",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : version certifiée halal au profil miel-amande proche.",
      details: [
        "Goût voisin",
        "Certification visible",
        "Choix plus simple à valider"
      ]
    }
  },
  {
    name: "Mars",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Barre caramel-chocolat sans certification halal claire dans cette base.",
    confidence: "Confiance 62 %",
    certification: "Documentation limitée",
    certificationNote:
      "La base locale ne contient pas de certificat halal pour cette référence. Certains arômes et additifs restent à confirmer.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 62,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Certification absente"
    ],
    justification:
      "Le classement douteux reflète surtout l’absence de traçabilité halal documentée sur une formule transformée et multi-ingrédients.",
    alternative: {
      name: "Barre caramel halal",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : barre certifiée halal avec profil caramel-chocolat proche.",
      details: [
        "Texture similaire",
        "Certification visible",
        "Alternative rassurante"
      ]
    }
  },
  {
    name: "Snickers",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Barre chocolat-cacahuète sans preuve halal suffisante dans cette base.",
    confidence: "Confiance 62 %",
    certification: "Documentation limitée",
    certificationNote:
      "Aucun certificat halal exploitable trouvé. Les arômes et additifs restent insuffisamment détaillés.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 62,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Certification absente"
    ],
    justification:
      "Le produit n’est pas classé haram, mais la base locale ne contient pas assez de preuves pour lui attribuer un statut halal fiable.",
    alternative: {
      name: "Barre cacahuète halal",
      store: "Carrefour",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : version certifiée halal avec profil cacahuète-caramel proche.",
      details: [
        "Goût voisin",
        "Certification halal",
        "Traçabilité meilleure"
      ]
    }
  },
  {
    name: "Twix",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Biscuit caramel chocolat avec certification halal absente dans cette base.",
    confidence: "Confiance 62 %",
    certification: "Documentation limitée",
    certificationNote:
      "Aucune certification halal officielle visible. La formule transformée demande davantage de traçabilité.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 62,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Certification absente"
    ],
    justification:
      "Le classement douteux s’appuie sur le manque de preuve documentaire plus que sur une alerte franche d’ingrédient interdit.",
    alternative: {
      name: "Biscuit caramel halal",
      store: "Auchan",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : biscuit caramel certifié halal avec composition plus claire.",
      details: [
        "Texture proche",
        "Certification visible",
        "Choix simplifié"
      ]
    }
  },
  {
    name: "Bounty",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Barre coco chocolat sans preuve halal assez forte dans cette base locale.",
    confidence: "Confiance 63 %",
    certification: "Certification non affichée",
    certificationNote:
      "Aucun certificat halal visible. Certains arômes et auxiliaires doivent être confirmés.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 63,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Certification absente"
    ],
    justification:
      "Le produit reste douteux car la base n’apporte pas de validation halal claire sur une recette transformée.",
    alternative: {
      name: "Barre coco halal",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : version certifiée halal avec profil coco-chocolat similaire.",
      details: [
        "Goût proche",
        "Certification halal",
        "Meilleure transparence"
      ]
    }
  },
  {
    name: "KitKat",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Gaufrette chocolatée sans certification halal claire dans cette base.",
    confidence: "Confiance 64 %",
    certification: "Certification non affichée",
    certificationNote:
      "Aucun certificat halal exploitable trouvé. Certains arômes et additifs de la gaufrette restent à confirmer.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 64,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Certification absente"
    ],
    justification:
      "Le produit est classé douteux car la base locale ne permet pas une validation halal suffisamment solide malgré l’absence d’alerte flagrante.",
    alternative: {
      name: "Gaufrette halal chocolat",
      store: "Carrefour",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : gaufrette certifiée halal avec texture et usage proches.",
      details: [
        "Croquant similaire",
        "Certification visible",
        "Alternative rassurante"
      ]
    }
  },
  {
    name: "Smarties",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Confiserie chocolatée sans ingrédient animal critique détecté sur cette base.",
    confidence: "Confiance 84 %",
    certification: "Analyse ingrédients",
    certificationNote:
      "Pas de certificat halal affiché, mais aucun gélifiant animal ni ingrédient carné critique n’est visible dans la fiche utilisée.",
    certifier: "Analyse interne Niyyah",
    country: "France",
    validity: "Analyse r�cente",
    reliabilityLabel: "Élevée",
    reliabilityScore: 84,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Pas de gélatine détectée",
      "Formulation sucrée standard"
    ],
    justification:
      "Le produit est classé halal sur la base d’une composition sans ingrédient animal critique identifié dans la documentation consultée.",
    alternative: {
      name: "Dragées chocolat halal",
      store: "Auchan",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : version certifiée halal, composition claire et profil similaire.",
      details: [
        "Goût proche",
        "Certification visible",
        "Choix plus simple"
      ]
    }
  },
  {
    name: "Lion Bar",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Barre chocolatée croustillante sans preuve halal suffisante dans cette base.",
    confidence: "Confiance 61 %",
    certification: "Documentation limitée",
    certificationNote:
      "Aucune certification halal visible et composition multi-ingrédients demandant plus de traçabilité.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 61,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes à confirmer",
      "Certification absente"
    ],
    justification:
      "Le caractère douteux vient du manque d’information détaillée sur la chaîne d’ingrédients et non d’une preuve directe de non-conformité.",
    alternative: {
      name: "Barre croustillante halal",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : barre certifiée halal avec texture croustillante comparable.",
      details: [
        "Texture proche",
        "Certification halal",
        "Meilleure traçabilité"
      ]
    }
  },
  {
    name: "After Eight",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Chocolat menthe sans preuve halal robuste dans cette base locale.",
    confidence: "Confiance 60 %",
    certification: "Certification non affichée",
    certificationNote:
      "Absence de certificat halal et nécessité de confirmer certains arômes et agents de texture.",
    certifier: "Non communiqué",
    country: "Royaume-Uni",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 60,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes menthe à confirmer",
      "Certification absente"
    ],
    justification:
      "Le doute vient du manque de preuve documentaire suffisante sur les arômes et auxiliaires technologiques utilisés.",
    alternative: {
      name: "Carrés menthe halal",
      store: "Monoprix",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : produit certifié halal au profil chocolat-menthe proche.",
      details: [
        "Goût similaire",
        "Certification visible",
        "Plus simple à valider"
      ]
    }
  },
  {
    name: "Quality Street",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Assortiment de confiseries avec recettes multiples à valider individuellement.",
    confidence: "Confiance 56 %",
    certification: "Documentation insuffisante",
    certificationNote:
      "Plusieurs bonbons différents dans un même assortiment, sans certification halal unifiée dans cette base.",
    certifier: "Non communiqué",
    country: "Royaume-Uni",
    validity: "À confirmer",
    reliabilityLabel: "Faible",
    reliabilityScore: 56,
    metadataMode: "partial",
    proofScore: "3 points à vérifier",
    proof: [
      "Recettes multiples",
      "Arômes variés à confirmer",
      "Certification absente"
    ],
    justification:
      "Le produit est plus difficile à valider car chaque pièce peut avoir des ingrédients différents, ce qui réduit fortement la fiabilité sans documentation détaillée.",
    alternative: {
      name: "Assortiment halal chocolat",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : assortiment certifié halal avec recettes documentées individuellement.",
      details: [
        "Usage cadeau proche",
        "Certification visible",
        "Validation plus simple"
      ]
    }
  },
  {
    name: "Nescafé",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Café instantané simple sans ingrédient animal détecté dans cette base.",
    confidence: "Confiance 95 %",
    certification: "Naturellement conforme",
    certificationNote:
      "Produit de type café simple sans additif animal dans la fiche consultée. Aucune certification halal spécifique requise ici.",
    certifier: "Non requis",
    country: "Suisse",
    validity: "Conforme sur cette composition",
    reliabilityLabel: "Très élevée",
    reliabilityScore: 95,
    metadataMode: "natural",
    proofScore: "2 preuves trouvées",
    proof: [
      "Café instantané simple",
      "Aucun additif animal détecté"
    ],
    justification:
      "Le classement halal repose sur une composition très courte et naturellement conforme, sans gélifiant, arôme critique ou ingrédient carné identifié.",
    alternative: {
      name: "Café soluble halal certifié",
      store: "Supermarché",
      country: "France",
      reliabilityLabel: "Très élevée",
      certification:
        "Certification alternative : non nécessaire ou certifiée selon gamme, avec composition simple et claire.",
      details: [
        "Usage identique",
        "Très facile à trouver",
        "Composition simple"
      ]
    }
  },
  {
    name: "Haribo Oursons d'Or",
    tone: "haram",
    pill: "Ingrédient haram détecté",
    title: "Haram",
    text: "Gélatine animale signalée dans la composition type.",
    confidence: "Confiance 93 %",
    certification: "Non conforme",
    certificationNote:
      "Aucune certification halal reconnue. La composition type mentionne une gélatine non documentée comme halal.",
    certifier: "Aucun organisme reconnu",
    country: "France",
    validity: "Non applicable",
    reliabilityLabel: "Très élevée",
    reliabilityScore: 93,
    metadataMode: "warning",
    proofScore: "2 alertes critiques",
    proof: [
      "Gélatine animale présente",
      "Aucune certification halal"
    ],
    justification:
      "Le classement haram est justifié par la présence de gélatine animale sans preuve d’abattage halal ni substitution végétale. Ici, le doute profite à la prudence maximale.",
    alternative: {
      name: "Oursons halal gélifiés",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Très élevée",
      certification:
        "Certification alternative : gélifiant halal documenté, certificat visible et formulation dédiée au marché halal.",
      details: [
        "Goût fruité proche",
        "Sans gélatine porcine",
        "Certification halal visible"
      ]
    }
  },
  {
    name: "Lay's Nature",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Chips nature sans arôme carné détecté.",
    confidence: "Confiance 91 %",
    certification: "Lecture ingrédients",
    certificationNote:
      "Pas de certificat halal affiché, mais la recette analysée est courte et sans additif à risque dans cette version nature.",
    certifier: "Analyse interne Niyyah",
    country: "Belgique",
    validity: "Analyse r�cente",
    reliabilityLabel: "Élevée",
    reliabilityScore: 91,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Pomme de terre, huile, sel",
      "Pas d’arôme sensible"
    ],
    justification:
      "La version nature est considérée halal grâce à une composition très simple, sans enzymes, gélatine, arômes carnés ou additifs d’origine animale identifiés.",
    alternative: {
      name: "Tyrells Lightly Sea Salted",
      store: "Monoprix",
      country: "Royaume-Uni",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : recette simple et traçabilité ingrédients mieux documentée.",
      details: [
        "Produit proche",
        "Recette simple",
        "Disponible en grande surface"
      ]
    }
  },
  {
    name: "Lay’s Classique",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Chips classiques sans arôme carné détecté.",
    confidence: "Confiance 91 %",
    certification: "Lecture ingrédients",
    certificationNote:
      "Pas de certificat halal affiché, mais la recette consultée est simple et sans additif sensible identifié.",
    certifier: "Analyse interne Niyyah",
    country: "Belgique",
    validity: "Analyse r�cente",
    reliabilityLabel: "Élevée",
    reliabilityScore: 91,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Pomme de terre, huile, sel",
      "Pas d’arôme sensible"
    ],
    justification:
      "La version classique est considérée halal grâce à une composition courte, sans ingrédient animal ou arôme carné identifié.",
    alternative: {
      name: "Tyrells Lightly Sea Salted",
      store: "Monoprix",
      country: "Royaume-Uni",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : recette simple et traçabilité ingrédients mieux documentée.",
      details: [
        "Produit proche",
        "Recette simple",
        "Disponible en grande surface"
      ]
    }
  },
  {
    name: "Pringles Original",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Version nature sans ingrédient animal détecté.",
    confidence: "Confiance 85 %",
    certification: "Lecture ingrédients",
    certificationNote:
      "Pas de certificat halal affiché, mais la version nature consultée ne montre pas d’arôme carné ou gélifiant critique.",
    certifier: "Analyse interne Niyyah",
    country: "Belgique",
    validity: "Analyse r�cente",
    reliabilityLabel: "Élevée",
    reliabilityScore: 85,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Pas d’arôme viande",
      "Version nature analysée"
    ],
    justification:
      "Le verdict halal repose sur l’absence d’ingrédients animaux critiques identifiés dans la fiche consultée pour cette version originale.",
    alternative: {
      name: "Lay's Nature",
      store: "Supermarché",
      country: "Belgique",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : recette simple, sans arôme carné identifié dans cette base.",
      details: [
        "Produit apéritif similaire",
        "Recette simple",
        "Très disponible"
      ]
    }
  },
  {
    name: "Doritos Nacho",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Arômes et enzymes possibles à confirmer selon marché.",
    confidence: "Confiance 61 %",
    certification: "Non documentée",
    certificationNote:
      "La base locale ne précise pas suffisamment l’origine des arômes fromage et des enzymes potentielles.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 61,
    metadataMode: "partial",
    proofScore: "3 points à vérifier",
    proof: [
      "Arômes complexes",
      "Origine enzymes non précisée",
      "Certification halal absente"
    ],
    justification:
      "Le caractère douteux vient de la complexité aromatique de la version fromage, qui nécessite une meilleure traçabilité pour conclure proprement.",
    alternative: {
      name: "Tortillas fromage halal",
      store: "Carrefour",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : version certifiée halal avec ingrédients mieux tracés.",
      details: [
        "Profil apéritif proche",
        "Version certifiée possible",
        "Ingrédients mieux tracés"
      ]
    }
  },
  {
    name: "Haribo Dragibus",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Bonbons sans gélatine animale détectée sur cette fiche locale.",
    confidence: "Confiance 89 %",
    certification: "Lecture ingrédients",
    certificationNote:
      "Pas de certificat halal affiché, mais la composition consultée ne montre pas de gélatine animale.",
    certifier: "Analyse interne Niyyah",
    country: "France",
    validity: "Analyse r�cente",
    reliabilityLabel: "Élevée",
    reliabilityScore: 89,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Sans gélatine animale",
      "Composition sucrée standard"
    ],
    justification:
      "Le verdict halal repose sur l’absence de gélatine animale ou d’ingrédient carné critique dans la fiche locale consultée.",
    alternative: {
      name: "Bonbons fruits halal",
      store: "Auchan",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : version certifiée halal avec profil fruité proche.",
      details: [
        "Texture proche",
        "Certification halal possible",
        "Rayon confiserie"
      ]
    }
  },
  {
    name: "Haribo Ours d'Or",
    tone: "haram",
    pill: "Ingrédient haram détecté",
    title: "Haram",
    text: "Gélatine animale signalée dans la composition type.",
    confidence: "Confiance 93 %",
    certification: "Non conforme",
    certificationNote:
      "Aucune certification halal reconnue. La composition type mentionne une gélatine non documentée comme halal.",
    certifier: "Aucun organisme reconnu",
    country: "France",
    validity: "Non applicable",
    reliabilityLabel: "Très élevée",
    reliabilityScore: 93,
    metadataMode: "warning",
    proofScore: "2 alertes critiques",
    proof: [
      "Gélatine animale présente",
      "Aucune certification halal"
    ],
    justification:
      "Le classement haram est justifié par la présence de gélatine animale sans preuve d’abattage halal ni substitution végétale.",
    alternative: {
      name: "Oursons halal gélifiés",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Très élevée",
      certification:
        "Certification alternative : gélifiant halal documenté, certificat visible et formulation dédiée au marché halal.",
      details: [
        "Goût fruité proche",
        "Sans gélatine porcine",
        "Certification halal visible"
      ]
    }
  },
  {
    name: "Danette Vanille",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Dessert lacté sans alerte directe, mais arômes et gélifiants à confirmer selon lot.",
    confidence: "Confiance 66 %",
    certification: "Documentation partielle",
    certificationNote:
      "Aucune certification halal visible et détail insuffisant sur certains agents de texture ou arômes.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer selon lot",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 66,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Arômes vanille à confirmer",
      "Certification halal absente"
    ],
    justification:
      "Le produit reste douteux car la base locale ne fournit pas assez de traçabilité sur les composants secondaires d’un dessert transformé.",
    alternative: {
      name: "Crème dessert vanille halal",
      store: "Carrefour",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : dessert certifié halal avec composition mieux détaillée.",
      details: [
        "Texture proche",
        "Certification halal",
        "Alternative plus rassurante"
      ]
    }
  },
  {
    name: "Activia Nature",
    tone: "halal",
    pill: "Halal vérifié",
    title: "Halal",
    text: "Yaourt nature simple sans ingrédient critique détecté.",
    confidence: "Confiance 94 %",
    certification: "Lecture ingrédients",
    certificationNote:
      "Pas de certificat halal affiché, mais la fiche consultée ne montre que lait et ferments sans additif sensible.",
    certifier: "Analyse interne Niyyah",
    country: "France",
    validity: "Analyse r�cente",
    reliabilityLabel: "Très élevée",
    reliabilityScore: 94,
    metadataMode: "analysis",
    proofScore: "2 points validés",
    proof: [
      "Lait et ferments",
      "Aucun arôme sensible"
    ],
    justification:
      "Le yaourt nature est considéré halal grâce à une composition courte et naturellement conforme dans la fiche locale consultée.",
    alternative: {
      name: "Yaourt nature halal",
      store: "Supermarché",
      country: "France",
      reliabilityLabel: "Très élevée",
      certification:
        "Certification alternative : non nécessaire ou gamme certifiée selon marque, composition simple.",
      details: [
        "Usage identique",
        "Composition simple",
        "Facile à trouver"
      ]
    }
  },
  {
    name: "Vache Qui Rit",
    tone: "doubtful",
    pill: "Vérification recommandée",
    title: "Douteux",
    text: "Fromage fondu courant, mais enzymes et auxiliaires à confirmer.",
    confidence: "Confiance 63 %",
    certification: "Certification non affichée",
    certificationNote:
      "Aucune certification halal visible et absence de détail suffisant sur les enzymes utilisées.",
    certifier: "Non communiqué",
    country: "France",
    validity: "À confirmer",
    reliabilityLabel: "Moyenne",
    reliabilityScore: 63,
    metadataMode: "partial",
    proofScore: "2 points à vérifier",
    proof: [
      "Enzymes non détaillées",
      "Certification absente"
    ],
    justification:
      "Le classement douteux repose sur le manque d’information sur les enzymes laitières et l’absence de certificat halal clair.",
    alternative: {
      name: "Fromage fondu halal",
      store: "Magasin halal",
      country: "France",
      reliabilityLabel: "Élevée",
      certification:
        "Certification alternative : fromage certifié halal avec enzymes et composition mieux documentées.",
      details: [
        "Usage tartinable proche",
        "Certification visible",
        "Plus simple à valider"
      ]
    }
  },
  {
    name: "Herta Knacki",
    tone: "haram",
    pill: "Ingrédient haram détecté",
    title: "Haram",
    text: "Produit carné porcin non conforme au halal.",
    confidence: "Confiance 99 %",
    certification: "Non conforme",
    certificationNote:
      "Produit à base de porc, sans possibilité de compatibilité halal.",
    certifier: "Non applicable",
    country: "France",
    validity: "Non applicable",
    reliabilityLabel: "Très élevée",
    reliabilityScore: 99,
    metadataMode: "warning",
    proofScore: "2 alertes critiques",
    proof: [
      "Viande de porc",
      "Pas de certification halal"
    ],
    justification:
      "Le classement haram est direct car la matière première principale est porcine. Ici, aucune nuance n’est nécessaire : le produit n’est pas compatible halal.",
    alternative: {
      name: "Saucisses de volaille halal",
      store: "Carrefour halal",
      country: "France",
      reliabilityLabel: "Très élevée",
      certification:
        "Certification alternative : volaille certifiée halal, contrôle abattage et composition consultable.",
      details: [
        "Usage proche",
        "Certification halal",
        "Facile à cuisiner"
      ]
    }
  }
];

const featuredProducts = [
  "Nutella 400g",
  "Kinder Bueno",
  "Kinder Surprise",
  "Ferrero Rocher",
  "Oreo Original",
  "Vanilla Whey Protein",
  "Fruit Candy Mix",
  "Creamy Caesar Sauce",
  "Coca-Cola 33cl",
  "Lay's Classique",
  "Haribo Ours d'Or",
  "Nescafé"
];

const scanButton = document.getElementById("scanButton");
const scanAgainButton = document.getElementById("scanAgainButton");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("productSearch");
const quickTags = document.getElementById("quickTags");
const productName = document.getElementById("productName");
const resultCard = document.getElementById("resultCard");
const resultPill = document.getElementById("resultPill");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const certificationName = document.getElementById("certificationName");
const certificationNote = document.getElementById("certificationNote");
const certifierName = document.getElementById("certifierName");
const certificationCountry = document.getElementById("certificationCountry");
const certificationValidity = document.getElementById("certificationValidity");
const reliabilityText = document.getElementById("reliabilityText");
const reliabilityFill = document.getElementById("reliabilityFill");
const metaGrid = document.getElementById("metaGrid");
const reliabilityBar = document.getElementById("reliabilityBar");
const proofScore = document.getElementById("proofScore");
const proofList = document.getElementById("proofList");
const justificationText = document.getElementById("justificationText");
const confidence = document.getElementById("confidenceText");
const alternativeName = document.getElementById("alternativeName");
const alternativeStore = document.getElementById("alternativeStore");
const alternativeCountry = document.getElementById("alternativeCountry");
const alternativeReliabilityText = document.getElementById("alternativeReliabilityText");
const alternativeList = document.getElementById("alternativeList");
const alternativeCertification = document.getElementById("alternativeCertification");
const eidBanner = document.getElementById("eidBanner");
const eidTitle = document.getElementById("eidTitle");
const eidText = document.getElementById("eidText");

let currentIndex = 0;

const activeSeasonalOffer = {
  isActive: false,
  country: "France",
  title: "Aïd Mubarak",
  text: "Aujourd’hui seulement, vous recevez 15 utilisations gratuites de Niyyah Plus."
};

function renderQuickTags() {
  quickTags.innerHTML = featuredProducts
    .map(
      (name) =>
        `<button class="quick-tag" type="button" data-product="${name}">${name}</button>`
    )
    .join("");
}

function renderProduct(product) {
  productName.textContent = product.name;
  resultCard.className = `result-card status-${product.tone}`;
  resultPill.textContent = product.pill;
  resultTitle.textContent = product.title;
  resultText.textContent = product.text;
  confidence.textContent = product.confidence;
  certificationName.textContent = product.certification;
  certificationNote.textContent = product.certificationNote;
  certifierName.textContent = product.certifier;
  certificationCountry.textContent = product.country;
  certificationValidity.textContent = product.validity;
  reliabilityText.textContent = product.reliabilityLabel;
  reliabilityFill.style.width = `${product.reliabilityScore}%`;
  metaGrid.dataset.mode = product.metadataMode || "partial";
  reliabilityBar.dataset.mode = product.metadataMode || "partial";
  proofScore.textContent = product.proofScore;
  proofList.innerHTML = product.proof.map((item) => `<li>${item}</li>`).join("");
  justificationText.textContent = product.justification;
  alternativeName.textContent = product.alternative.name;
  alternativeStore.textContent = product.alternative.store;
  alternativeCountry.textContent = product.alternative.country;
  alternativeReliabilityText.textContent = product.alternative.reliabilityLabel;
  alternativeCertification.textContent = product.alternative.certification;
  alternativeList.innerHTML = product.alternative.details
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function setCurrentProductByIndex(index) {
  currentIndex = index;
  renderProduct(products[currentIndex]);
}

function cycleState() {
  const nextIndex = (currentIndex + 1) % products.length;
  setCurrentProductByIndex(nextIndex);
}

function buildFallbackProduct(query) {
  return {
    name: query,
    tone: "doubtful",
    pill: "Recherche complémentaire recommandée",
    title: "Douteux",
    text: "Produit non trouvé dans la base de démonstration actuelle.",
    confidence: "Confiance 51 %",
    certification: "Aucune donnée fiable",
    certificationNote:
      "Aucun certificat ou justificatif exploitable n’est disponible pour ce produit dans la base locale actuelle.",
    certifier: "Inconnu",
    country: "Non déterminé",
    validity: "À vérifier",
    reliabilityLabel: "Faible",
    reliabilityScore: 51,
    metadataMode: "unknown",
    proofScore: "Recherche supplémentaire requise",
    proof: [
      "Produit absent de la base démo",
      "Vérifier les ingrédients et le fabricant",
      "Demander une source officielle ou une certification"
    ],
    justification:
      "Le verdict reste douteux non pas parce que le produit est forcément problématique, mais parce qu’il manque trop d’éléments fiables pour conclure proprement.",
    alternative: {
      name: "Alternative à identifier",
      store: "Recherche locale",
      country: "À définir",
      reliabilityLabel: "Moyenne",
      certification:
        "Certification alternative : à confirmer selon la marque de remplacement retenue.",
      details: [
        "Chercher un équivalent au goût proche",
        "Vérifier la disponibilité en magasin",
        "Afficher preuve et composition avant achat"
      ]
    }
  };
}

function findProduct(query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return products[0];
  }

  const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean);

  return (
    products.find((product) =>
      product.name.toLowerCase().includes(normalizedQuery)
    ) ||
    products.find((product) => {
      const normalizedName = product.name.toLowerCase();
      return queryTerms.every((term) => normalizedName.includes(term));
    ) || buildFallbackProduct(query)
  );
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const match = findProduct(searchInput.value);
  const index = products.findIndex((product) => product.name === match.name);

  if (index >= 0) {
    setCurrentProductByIndex(index);
  } else {
    renderProduct(match);
  }
});

quickTags.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const product = target.dataset.product;

  if (!product) {
    return;
  }

  searchInput.value = product;
  const index = products.findIndex((item) => item.name === product);
  if (index >= 0) {
    setCurrentProductByIndex(index);
  }
});

scanButton.addEventListener("click", cycleState);
scanAgainButton.addEventListener("click", cycleState);

renderQuickTags();
renderProduct(products[0]);

if (activeSeasonalOffer.isActive) {
  eidTitle.textContent = activeSeasonalOffer.title;
  eidText.textContent = activeSeasonalOffer.text;
  eidBanner.hidden = false;
}

