// window.addEventListener('load', function() {
//     const loader = document.getElementById('loader');
//     const content = document.getElementById('content');

//     // Délai de 3 secondes (3000 millisecondes) avant d'afficher le contenu
//     setTimeout(function() {
//         loader.style.display = 'none'; // Masque le loader
//         content.classList.remove('hidden'); // Affiche le contenu
//     }, 3000); // Ajustez le délai ici
// });

 window.onload = function() {
     const loader = document.getElementById('loader');
//     loader.style.display = 'none';
    
    // Ajoute un délai de 2 secondes avant de masquer l'overlay de chargement
     setTimeout(function() {
         loader.style.display = 'none';
     }, 1000); // 2000 millisecondes = 2 secondes
};

