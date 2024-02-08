// Animation lorsque la souris entre dans les images des services
$(document).ready(function() {
    // Animation lorsque la souris entre dans le bloc
    $('.block').mouseenter(function() {
        $(this).find('img').css('filter', 'brightness(1)');
    });

    // Animation lorsque la souris quitte le bloc
    $('.block').mouseleave(function() {
        $(this).find('img').css('filter', 'brightness(0.6)');
    });

    // Animation lorsque la souris entre dans le titre du bloc
    $('.block h2').mouseenter(function() {
        $(this).css('color', '#d5d9db');
    });

    // Animation lorsque la souris quitte le titre du bloc
    $('.block h2').mouseleave(function() {
        $(this).css('color', '#fff');
    });
});


  // Ajustement de la taille des titres pour qu'ils aient tous la même hauteur
  adjustTitleSizes();

  // Partie formulaire de contact
  // Vous pouvez ajouter votre logique de soumission de formulaire ici


// Fonction pour ajuster les tailles des titres
function adjustTitleSizes() {
  const titles = document.querySelectorAll(".block h2");
  let maxHeight = 0;

  // Réinitialise d'abord toutes les hauteurs pour permettre le recalcul correct
  titles.forEach((title) => {
      title.style.height = "auto";
  });

  // Calcule la hauteur maximale parmi tous les titres
  titles.forEach((title) => {
      maxHeight = Math.max(maxHeight, title.offsetHeight);
  });

  // Applique la hauteur maximale à tous les titres pour les aligner
  titles.forEach((title) => {
      title.style.height = `${maxHeight}px`;
      title.style.backgroundColor = "white";
  });
}



  // animation SLOGGANS
document.addEventListener("DOMContentLoaded", function() {
    const features = document.querySelectorAll(".feature");

    features.forEach((feature, index) => {
        // Animation initiale pour chaque cercle
        const circle = feature.querySelector(".circle");
        circle.style.opacity = 0;
        circle.style.transform = "scale(0)";

        // Délai pour l'animation de chaque feature
        setTimeout(() => {
            circle.style.opacity = 1;
            circle.style.transform = "scale(1)";

            // Apparition progressive du texte
            const h2 = feature.querySelector("h2");
            const p = feature.querySelector("p");
            setTimeout(() => {
                h2.style.opacity = 1;
                h2.style.transform = "translateY(0)";
                p.style.opacity = 1;
                p.style.transform = "translateY(0)";
            }, 300);
        }, index * 300);
    });
});
