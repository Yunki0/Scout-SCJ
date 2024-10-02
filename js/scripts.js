window.onload = function() {
     const loader = document.getElementById('loader');
//     loader.style.display = 'none';
    
    // Ajoute un délai de 2 secondes avant de masquer l'overlay de chargement
     setTimeout(function() {
         loader.style.display = 'none';
     }, 500); // 2000 millisecondes = 2 secondes
};

