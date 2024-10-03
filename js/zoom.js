// // Récupère tous les éléments image avec la classe 'zoomable'
// const images = document.querySelectorAll('.zoomable');
// const zoomOverlay = document.getElementById('zoomOverlay');
// const zoomedImage = document.getElementById('zoomedImage');
// const closeZoom = document.getElementById('closeZoom');
// const body = document.body; // Récupère l'élément body

// // Ajoute un événement de clic à chaque image
// images.forEach(image => {
//   image.addEventListener('click', () => {
//     zoomedImage.src = image.src; // Met à jour la source de l'image zoomée
//     zoomOverlay.style.display = 'flex'; // Affiche le conteneur de zoom
//     body.classList.add('no-scroll'); // Désactive le défilement
//   });
// });

// // Fermer l'image zoomée lorsque l'utilisateur clique sur 'X'
// closeZoom.addEventListener('click', () => {
//   zoomOverlay.style.display = 'none'; // Cache le conteneur de zoom
//   body.classList.remove('no-scroll'); // Réactive le défilement
// });

// Récupère tous les éléments image avec la classe 'zoomable'
const images = document.querySelectorAll('.zoomable');
const zoomOverlay = document.getElementById('zoomOverlay');
const zoomedImage = document.getElementById('zoomedImage');
const closeZoom = document.getElementById('closeZoom');
const body = document.body; // Récupère l'élément body

// Fonction pour fermer le zoom et réactiver le défilement
function closeZoomImage() {
  zoomOverlay.style.display = 'none'; // Cache le conteneur de zoom
  body.classList.remove('no-scroll'); // Réactive le défilement
}

// Ajoute un événement de clic à chaque image
images.forEach(image => {
  image.addEventListener('click', () => {
    zoomedImage.src = image.src; // Met à jour la source de l'image zoomée
    zoomOverlay.style.display = 'flex'; // Affiche le conteneur de zoom
    body.classList.add('no-scroll'); // Désactive le défilement
  });
});

// Fermer l'image zoomée en cliquant sur la croix
closeZoom.addEventListener('click', closeZoomImage);

// Fermer l'image zoomée en cliquant sur l'image elle-même
zoomedImage.addEventListener('click', closeZoomImage);

// Fermer L'image zoomée en cliquant dans l'arrière plan noir
zoomOverlay.addEventListener('click', closeZoomImage);
