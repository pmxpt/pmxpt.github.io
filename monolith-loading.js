const backgrounds = [
	"images/image1.png",
	"images/image2.png",
	"images/image3.png",
	"images/image4.png",
	"images/image5.png",
	"images/image6.png",
	"images/image7.png",
	"images/image8.png",
	"images/image9.png"
];
const tips = {
	'en': [
		"TIP | You need a license to buy a gun (Legally).",
		"TIP | Dying takes money from both your wallet and bank, try to keep your funds deposited.",
		"TIP | Diamonds and a keycard are gained by robbing the jewellery store!",
		"TIP | Try to save your money for better weapons and cars.",
		"TIP | Weed is a good starter drug requiring 15 farming to plant.",
		"TIP | LSD is a drug you can start straight off the bat.",
		"TIP | You should only rob someone in a secluded place.",
		"TIP | You should only rob someone in a secluded place.",
		"TIP | You can make guns with a industrial furnace.",
		"TIP | Make sure to get your drivers license at the town hall.",
	],
	'fr': [
		"ASTUCE | Il faut un permis pour acheter une arme à feu (légalement).",
		"ASTUCE | La mort prélève de l'argent à la fois sur votre portefeuille et sur votre banque, essayez donc de garder vos fonds déposés.",
		"ASTUCE | Les diamants et la carte magnétique sont obtenus en cambriolant la bijouterie !",
		"CONSEIL | Essayez d'économiser votre argent pour acheter de meilleures armes et voitures.",
		"ASTUCE | L'herbe est une bonne drogue de départ qui nécessite 15 en agriculture pour être plantée.",
		"ASTUCE | Le LSD est une drogue que l'on peut commencer dès le début.",
		"CONSEIL | Vous ne devriez voler quelqu'un que dans un endroit isolé.",
		"CONSEIL | Vous ne devriez voler quelqu'un que dans un endroit isolé.",
		"ASTUCE | Vous pouvez fabriquer des fusils avec un four industriel.",
		"CONSEIL | N'oubliez pas d'obtenir votre permis de conduire à la mairie.",
	],
};
const slides = document.getElementById('slides');
function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language)
{
	var html = '';
	var ctips = tips[language] || tips.en;
	backgrounds.forEach(function(background, i) {
		html += '<a class="slide">' +
		'<span class="animate right" style="background-image: url(' + background + ')"></span>' +
		'<div class="static-content"><h1>' + (ctips[i] || '') + '</h1></div>' +
		'</a>';
	});
	slides.innerHTML = html;
	$('#slides').slideshow({
		slideDuration: 6000,	// Duration of each induvidual slide.
		fadeDuration: 1000,		// Duration of the fading transition. Should be shorter than slideDuration.
		pauseOnTabBlur: false,	// Not needed as I don't thing focus gets triggered in gmod
	});
}

GameDetails("Monolith France", "91.134.62.32:27015", "rp_monoford_v1l", 128, "", "", 0, "fr")
