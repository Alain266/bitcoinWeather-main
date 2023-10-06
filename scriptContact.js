// Overlay de chargement
window.addEventListener("load", function() {
    // Lorsque la page et les ressources sont totalement chargées
    var loadingOverlay = document.querySelector(".loading-overlay");// Cacher l'overlay de chargement
    loadingOverlay.style.display = "none"; // Cacher l'overlay de chargement
  
    var elementToAnimate = document.querySelector(".animation1, .animation2, .animation3, .fade-in"); // Récupération de l'élément
    elementToAnimate.classList.add("animation-initialized"); // Ajout de la classe d'animation
  });

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