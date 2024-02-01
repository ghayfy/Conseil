document.addEventListener('DOMContentLoaded', function () {
  // Initialisation des blocs et des animations de survol
  const blocks = document.querySelectorAll('.block');
  blocks.forEach((block) => {
      const img = block.querySelector('img');
      const title = block.querySelector('.centered-title');

      block.addEventListener('mouseenter', function () {
          img.style.transform = 'scale(1.1)';
      });

      block.addEventListener('mouseleave', function () {
          img.style.transform = 'scale(1)';
      });

      title.addEventListener('mouseenter', function () {
          img.style.transform = 'scale(1.1)';
      });

      title.addEventListener('mouseleave', function () {
          img.style.transform = 'scale(1)';
      });
  });

  // Ajustement de la taille des titres
  adjustTitleSizes();

  // Partie formulaire de contact
  // Vous pouvez ajouter votre logique de soumission de formulaire ici
});

// Fonction pour ajuster les tailles des titres
function adjustTitleSizes() {
  const titles = document.querySelectorAll(".block h2");
  let maxHeight = 0;

  titles.forEach((title) => {
      title.style.height = "auto";
  });

  titles.forEach((title) => {
      maxHeight = Math.max(maxHeight, title.offsetHeight);
  });

  titles.forEach((title) => {
      title.style.height = `${maxHeight}px`;
      title.style.backgroundColor = "white";
  });
}

function submitForm() {
  const formMessage = document.getElementById('formMessage');
  formMessage.innerHTML = 'Votre message a été envoyé avec succès!';
  formMessage.style.color = '#0a804a'; // Couleur verte pour le succès
  resetForm();
}

function resetForm() {
  document.getElementById('contactForm').reset();
}

$(document).ready(function() {
  var timer = 4000;
  var i = 0;
  var max = $('#c > li').length;
  // Ajoutez ici votre logique pour le carousel ou autre
});
