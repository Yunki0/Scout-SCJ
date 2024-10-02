// Récupère tous les éléments image avec la classe 'zoomable'
const images = document.querySelectorAll('.zoomable');
const zoomOverlay = document.getElementById('zoomOverlay');
const zoomedImage = document.getElementById('zoomedImage');
const closeZoom = document.getElementById('closeZoom');

// Ajoute un événement de clic à chaque image
images.forEach(image => {
    image.addEventListener('click', () => {
        zoomedImage.src = image.src; // Met à jour la source de l'image zoomée
        zoomOverlay.style.display = 'flex'; // Affiche le conteneur de zoom
    });
});

// Fermer l'image zoomée lorsque l'utilisateur clique sur 'X'
closeZoom.addEventListener('click', () => {
    zoomOverlay.style.display = 'none'; // Cache le conteneur de zoom
});