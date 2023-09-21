const Musique = [
  {
    name: "Muse",
    style: "Rock",
    picture:
      "https://cdns-images.dzcdn.net/images/artist/cd7c5861be0009d3b75d4d3c069317a7/500x500.jpg",
    creationYear: "1994",
    mostKnownTitle: "Supermassive Black Hole",
    persoFavTitle: "Knights of Cydonia (Live from Wembley)",
    listenersPerMonth: "13.398.011",
    country: "Angleterre",
    écouter: "https://open.spotify.com/intl-fr/artist/12Chz98pHFMPJEknJQMWvI",
  },

  {
    name: "Daft Punk",
    style: "Electro",
    picture:
      "https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500.jpg",
    creationYear: "1993",
    mostKnownTitle: "Get Lucky",
    persoFavTitle: "Veridis Quo",
    listenersPerMonth: "19.721.604",
    country: "France",
    écouter: "https://open.spotify.com/intl-fr/artist/4tZwfgrHOc3mvqYlEYSvVi",
  },
  {
    name: "Queen",
    style: "Rock",
    picture:
      "https://cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/500x500.jpg",
    creationYear: "1970",
    mostKnownTitle: "Bohemian Rhapsody",
    persoFavTitle: "Innuendo",
    listenersPerMonth: "47.255.466",
    country: "Angleterre",
    écouter: "https://open.spotify.com/intl-fr/artist/1dfeR4HaWDbWqFHLkxsg1d",
  },

  {
    name: "Kuma The Third",
    style: "Pulse Rap/Classical Rave",
    picture:
      "https://cdns-images.dzcdn.net/images/artist/55b5d7e63e992853db81dae70ca14d5c/500x500.jpg",
    creationYear: "2019",
    mostKnownTitle: "i rest my case",
    persoFavTitle: "LAST LAUGH!",
    listenersPerMonth: "534.252",
    country: "Japon/Australie",
    écouter: "https://open.spotify.com/intl-fr/artist/3x3F6t4cBw52hT89l1e4R1",
  },

  {
    name: "Sébastien Tellier",
    style: "Electro/Nu-Disco",
    picture: "assets/image/Sébastien Tellier.jpg",
    creationYear: "2001",
    mostKnownTitle: "La ritournelle",
    persoFavTitle: "Universe",
    listenersPerMonth: "570.007",
    country: "France",
    écouter: "https://open.spotify.com/intl-fr/artist/23ymPLjbtAMzTJS2qRtQ8Z",
  },

  {
    name: "Cypress Hill",
    style: "Rap",
    picture: "assets/image/Cypress Hill.jpg",
    creationYear: "1986",
    mostKnownTitle: "Insane in the Brain",
    persoFavTitle: "Tequilla Sunrise",
    listenersPerMonth: "6.333.853",
    country: "Etats-Unis",
    écouter: "https://open.spotify.com/intl-fr/artist/4P0dddbxPil35MNN9G2MEX",
  },

  {
    name: "Red Hot Chili Peppers",
    style: "Rock/Rap-Rock/Punk-Rock",
    picture: "assets/image/RedHot.jpg",
    creationYear: "1982",
    mostKnownTitle: "Under the Bridge",
    persoFavTitle: "Scar Tissue",
    listenersPerMonth: "30.173.736",
    country: "Etats-Unis",
    écouter: "https://open.spotify.com/intl-fr/artist/0L8ExT028jH3ddEcZwqJJ5",
  },

  {
    name: "Eminem",
    style: "Rap",
    picture:
      "https://cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500.jpg",
    creationYear: "1988",
    mostKnownTitle: "Lose Yourself",
    persoFavTitle: "'Till I Collapse",
    listenersPerMonth: "63.632.202",
    country: "Etats-Unis",
    écouter: "https://open.spotify.com/intl-fr/artist/7dGJo4pcD2V6oG8kP0tJRR",
  },

  {
    name: "Buena Vista Social Club",
    style: "Son cubain/Boléro",
    picture: "assets/image/BuenaVitaSocialClub.jpg",
    creationYear: "1996",
    mostKnownTitle: "Chan Chan",
    persoFavTitle: "Chan Chan",
    listenersPerMonth: "2.603.280",
    country: "Cuba/Etats-Unis",
    écouter: "https://open.spotify.com/intl-fr/artist/11kBu957KTYoAltZHDm8gW",
  },

  {
    name: "KALEO",
    style: "Indie pop/Alternatif",
    picture: "assets/image/KALEO.jpg",
    creationYear: "2012",
    mostKnownTitle: "Way down We Go",
    persoFavTitle: "Vor í Vaglaskógi",
    listenersPerMonth: "11.254.940",
    country: "Islande",
    écouter: "https://open.spotify.com/intl-fr/artist/7jdFEYD2LTYjfwxOdlVjmc",
  },
];

// Crée la nouvelle section
let newSection = document.createElement("section");
newSection.classList.add("container"); // ajout d'une classe "container" à notre section


// Parcoure le tableau Musique
Musique.forEach(function (music) {
  // Crée une div pour chaque carte
  let divCarte = document.createElement("div");
  divCarte.classList.add("carte"); //ajout d'une classe sur la div de la carte

  // Crée et ajoute un titre h2 pour le nom de l'artiste
  let nameCarte = document.createElement("h2");
  nameCarte.textContent = music.name;
  nameCarte.classList.add("titreCarte"); //ajout d'une classe sur le titre
  divCarte.appendChild(nameCarte);

  // creation et ajout image
  let imageCarte = document.createElement("img");
  imageCarte.setAttribute("src", music.picture);
  imageCarte.classList.add("illustrationCarte"); //ajout d'une classe sur l'image
  divCarte.appendChild(imageCarte);

  // Crée et ajoute un paragraphe pour le style musical
  let styleCarte = document.createElement("p");
  styleCarte.textContent = "Style: " + music.style;
  styleCarte.classList.add("info"); // ajout d'une classe sur le p
  divCarte.appendChild(styleCarte);

  // Crée et ajoute un paragraphe pour l'année de création
  let creationYear = document.createElement("p");
  creationYear.textContent = "Année de création: " + music.creationYear;
  creationYear.classList.add("info"); // ajout d'une classe sur le p
  divCarte.appendChild(creationYear);

  // Crée et ajoute un paragraphe pour le titre le plus connu
  let mostKnownTitle = document.createElement("p");
  mostKnownTitle.textContent = "Titre le plus connu: " + music.mostKnownTitle;
  mostKnownTitle.classList.add("info"); // ajout d'une classe sur le p
  divCarte.appendChild(mostKnownTitle);

  // Crée et ajoute un paragraphe pour le titre favori personnel
  let persoFavTitle = document.createElement("p");
  persoFavTitle.textContent = "Titre favori personnel: " + music.persoFavTitle;
  persoFavTitle.classList.add("info"); // ajout d'une classe sur le p
  divCarte.appendChild(persoFavTitle);

  // Crée et ajoute un paragraphe pour les auditeurs par mois
  let listenersPerMonth = document.createElement("p");
  listenersPerMonth.textContent =
    "Auditeurs par mois: " + music.listenersPerMonth;
  listenersPerMonth.classList.add("info"); //ajout d'une classe sur le p
  divCarte.appendChild(listenersPerMonth);

  // Crée et ajoute un paragraphe pour le pays d'origine
  let pays = document.createElement("p");
  pays.textContent = "Pays d'origine: " + music.country;
  pays.classList.add("info"); //ajout d'une classe sur le p
  divCarte.appendChild(pays);

  //création et ajout d'un bouton pour écouter
  let button = document.createElement("a");
  let link = document.createTextNode("Ecouter sur Spotify");
  button.classList.add("boutonSpotify"); // ajout d'une classe sur le bouton
  button.appendChild(link);
  divCarte.appendChild(button);
  button.title = "Ecouter sur Spotify";
  button.href = music.écouter;

  // Ajoute la carte (div) à la nouvelle section
  newSection.appendChild(divCarte);
  document.body.appendChild(newSection);

});


