window.onload = function() {
     const loader = document.getElementById('loader');
//     loader.style.display = 'none';
    
    // Ajoute un délai de 2 secondes avant de masquer l'overlay de chargement
     setTimeout(function() {
         loader.style.display = 'none';
     }, 1500); // 1500 millisecondes = 1.5 secondes
};

