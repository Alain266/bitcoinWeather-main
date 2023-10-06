// Overlay de chargement
window.addEventListener("load", function() {
  // Lorsque la page et les ressources sont totalement chargées
  var loadingOverlay = document.querySelector(".loading-overlay");// Cacher l'overlay de chargement
  loadingOverlay.style.display = "none"; // Cacher l'overlay de chargement

  var elementToAnimate = document.querySelector(".animation1, .animation2, .animation3, .fade-in"); // Récupération de l'élément
  elementToAnimate.classList.add("animation-initialized"); // Ajout de la classe d'animation
});

// Requête API
const fetchBitcoinData = () => { //Affiche les données du bitcoin 
  const apiKey = '3bda116dae778836c1115f7627197359';
  const apiUrl = `https://financialmodelingprep.com/api/v3/quote/BTCUSD?apikey=${apiKey}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => { 
          const quoteData = data[0];
          let name = quoteData.name; //Nom du marché
          let price = quoteData.price; //Prix du marché
          let yearHigh = quoteData.yearHigh; //ATH de l'année
          let yearLow = quoteData.yearLow; //ATL de l'année
          let marketCap = quoteData.marketCap; //MarketCap
          let priceAvg200 = quoteData.priceAvg200; //Prix moyen de 200 périodes

          // Div 1
          const p1 = document.createElement("p"); // Création d'un p1
          p1.innerText = name; // Ajout du texte
          p1.style.fontSize = "20px";
          p1.style.fontWeight = "bold";

          const p2 = document.createElement("p"); // Création d'un p2
          p2.innerText = "Prix : " + price.toLocaleString("fr-FR") + " $"; // Ajout du texte

          const p3 = document.createElement("p"); // Création d'un p3
          p3.innerText = "ATH de l'année : " + yearHigh.toLocaleString("fr-FR") + " $"; // Ajout du texte

          const p4 = document.createElement("p"); // Création d'un p4
          p4.innerText = "ATL de l'année : " + yearLow.toLocaleString("fr-FR") + " $"; // Ajout du texte

          const p5 = document.createElement("p"); // Création d'un p5
          p5.innerText = "MarketCap : " + marketCap.toLocaleString("fr-FR") + " $"; // Ajout du texte

          const p6 = document.createElement("p"); // Création d'un p5
          p6.innerText = "Prix MA200 : " + priceAvg200.toLocaleString("fr-FR") + " $"; // Ajout du texte

          let div1 = document.getElementById("content1"); // Récupération du parent
          div1.innerHTML = ""; // Effacer le contenu précédent
          div1.appendChild(p1); // Ajout de p1 à div1
          div1.appendChild(p2); // Ajout de p2 à div1
          div1.appendChild(p3); // Ajout de p3 à div1
          div1.appendChild(p4); // Ajout de p4 à div1
          div1.appendChild(p5); // Ajout de p5 à div1
          div1.appendChild(p6); // Ajout de p6 à div1    
          div1.style.backgroundColor = "#f794136c"; // Ajout de la couleur de fond
          div1.style.backdropFilter = "blur(10px)"; // Ajout de l'effet de filter: blur(5px)
          var tradingViewScript = document.querySelector('script[src="script-tradingview-btc.js"]');
          tradingViewScript.src = "script-tradingview-eth.js";
  })
}

const fetchEthereumData = () => { //Affiche les données de l'ethereum
  const apiKey = '3bda116dae778836c1115f7627197359';
  const apiUrl = `https://financialmodelingprep.com/api/v3/quote/ETHUSD?apikey=${apiKey}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => { 
          const quoteData = data[0];
          let name = quoteData.name; //Nom du marché
          let price = quoteData.price; //Prix du marché
          let yearHigh = quoteData.yearHigh; //ATH de l'année
          let yearLow = quoteData.yearLow; //ATL de l'année
          let marketCap = quoteData.marketCap; //MarketCap
          let priceAvg200 = quoteData.priceAvg200; //Prix moyen de 200 périodes

          // Div 1
          const p1 = document.createElement("p"); // Création d'un p1
          p1.innerText = name; // Ajout du texte
          p1.style.fontSize = "20px";
          p1.style.fontWeight = "bold";

          const p2 = document.createElement("p"); // Création d'un p2
          p2.innerText = "Prix :" + price.toLocaleString("fr-FR") + "$"; // Ajout du texte

          const p3 = document.createElement("p"); // Création d'un p3
          p3.innerText = "ATH de l'année : " + yearHigh.toLocaleString("fr-FR") + "$"; // Ajout du texte

          const p4 = document.createElement("p"); // Création d'un p4
          p4.innerText = "ATL de l'année : " + yearLow.toLocaleString("fr-FR") + "$"; // Ajout du texte

          const p5 = document.createElement("p"); // Création d'un p5
          p5.innerText = "MarketCap : " + marketCap.toLocaleString("fr-FR") + "$"; // Ajout du texte

          const p6 = document.createElement("p"); // Création d'un p5
          p6.innerText = "Prix MA200 : " + priceAvg200 + "$"; // Ajout du texte

          let div1 = document.getElementById("content1"); // Récupération du parent
          div1.innerHTML = ""; // Effacer le contenu précédent
          div1.appendChild(p1); // Ajout de p1 à div1
          div1.appendChild(p2); // Ajout de p2 à div1
          div1.appendChild(p3); // Ajout de p3 à div1
          div1.appendChild(p4); // Ajout de p4 à div1
          div1.appendChild(p5); // Ajout de p5 à div1
          div1.appendChild(p6); // Ajout de p6 à div1
          div1.style.backgroundColor = "#627dea6c"; // Ajout de la couleur de fond
  });
}

// Titre du site
const titre = document.createElement("h1"); // Création d'un h1
titre.innerText = "Bitcoin Weather"; // Ajout du texte
titre.classList.add("animation3");

const divTitre = document.getElementById("title"); // Récupération du parent

divTitre.appendChild(titre); // Ajout de titre à divTitre

//Menu navigation
const menuH = document.querySelector(".menu-hamburger");
const link = document.querySelector(".navbar");

menuH.addEventListener("click", () => {
    link.classList.toggle("mobile-menu");  
})

// Menu déroulant de la page (Bitcoin/Ethereum)
const menu = document.createElement("select"); // Création d'un menu déroulant
menu.style.fontSize = "18px"; // Taille du texte
menu.style.textAlign = "center"; // Alignement du texte
menu.style.backgroundColor = "#ffffff94"; // Couleur de fond

const section1 = document.createElement("option"); // Création d'une option
section1.innerText = "BTC"; // Ajout du texte
menu.appendChild(section1); // Ajout de section1 à menu

const section2 = document.createElement("option"); // Création d'une option

section2.innerText = "ETH"; // Ajout du texte
menu.appendChild(section2); // Ajout de section2 à menu

const divMenu = document.getElementById("menu"); // Récupération du parent

divMenu.appendChild(menu); // Ajout de menu à divMenu

fetchBitcoinData(); // Appel de la fonction par défaut 

// Gestionnaire du changement de menu
menu.addEventListener("change", () => { // Gestion du changement de menu
  const option = menu.value; // Récupération de l'option choisie
  if (option === "BTC") { // Si l'option est Bitcoin alors fetchBitcoinData
    fetchBitcoinData();
  }
  else if (option === "ETH") { // Si l'option est Ethereum alors fetchEthereumData
    fetchEthereumData();
  }
});

// Footer
const ftr = document.createElement("div"); // Création d'un div
ftr.innerText = "Copyright 2023 - All rights reserved"; // Ajout du texte

const footer = document.getElementById("footer"); // Récupération du parent
footer.appendChild(ftr); // Ajout de ftr à footer

// DEBUT ANIMATION
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    this.isDeleting = true;
    delta = this.period;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(() => {
    this.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
// FIN ANIMATION