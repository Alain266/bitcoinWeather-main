// Fonction pour récupérer la taille de l'écran
function getScreenSize() {
  return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
}

// Récupérer la taille de l'écran
const screenSize = getScreenSize();

// Créer le widget en utilisant la taille de l'écran
new TradingView.widget({
  "autosize": true,  // Définir autosize à true
  "symbol": "BINANCE:BTCUSDT",
  "timezone": "Europe/Paris",
  "theme": "dark",
  "style": "1",
  "locale": "fr",
  "enable_publishing": true,
  "withdateranges": true,
  "range": "YTD",
  "hide_side_toolbar": false,
  "allow_symbol_change": true,
  "details": true,
  "hotlist": true,
  "calendar": true,
  "show_popup_button": true,
  "popup_width": "1000",
  "popup_height": "650",
  "studies": [
      "Volume@tv-basicstudies",
      "STD;Choppiness_Index",
  ],
  "container_id": "tradingview_3c508",
  "width": screenSize.width,   // Définir la largeur en fonction de la taille de l'écran
  "height": screenSize.height  // Définir la hauteur en fonction de la taille de l'écran
});
