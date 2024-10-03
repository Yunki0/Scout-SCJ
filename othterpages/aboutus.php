<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/styles.css">
        <link rel="stylesheet" href="../css/spin.css">
        <link rel="stylesheet" href="../css/aboutus.css">
        <link rel="icon" href="../Images/scout(1).png">
    
        <title>Photos Scout</title>
    </head>
<body>
    <header>
        <div class="loader-overlay" id="loader">
            <div class="together">
                <div id="shadow"></div>
                <div id="box"></div>
            </div>
        </div>
        <nav class="nav-bar">
            <ul class="navbar">
                <li><a href="../index.html">Accueil</a></li>
                <li><a href="contact.html" class="active">Contact</a></li>
                <li><a href="../index.html"><img class="img-fleur lys-flower" src="../Images/Fleur de lys.png" alt="fleur de lys"></a></li>
                <li><img class="img-fleur scj" src="../Images/SCJ.png" alt="SCJ"></li>
            </ul>
        </nav>
        <section>
            <!-- <span><img src="" alt="banderole"></span> -->
        </section>
    </header>
    <main>
        <div class="gallery">
            <?php
            // Indique le dossier où se trouvent tes images
            $imagesDirectory = "../Images/scouts-moments/";

            // Vérifie si le dossier existe
            if (is_dir($imagesDirectory)) {
                // Parcours tous les fichiers du dossier avec des extensions d'image
                $images = glob($imagesDirectory . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);
                
                // Pour chaque image trouvée, crée une balise <img> et l'affiche
                foreach ($images as $image) {
                    echo '<img class="together zoomable" src="'.$image.'" alt="Image" style="width:200px; height:auto;">';
                }
            } else {
                echo "Le dossier d'images n'existe pas.";
            }
            ?>
            <!-- Ajoute d'autres images ici -->
        </div>  
        <div id="zoomOverlay" class="zoom-overlay">
            <span id="closeZoom" class="close">&times;</span>
            <img class="zoomed-image" id="zoomedImage" alt="Zoomed Image">
        </div>  
    </main>
    <footer>
        <section class="leftbox">
            <ul>
                <h2>Autres Liens</h2>
                <li><a href="https://www.scout.org/" target="_blank">Scout Mondial</a></li>
                <li><a href="https://adhesion.scoutascci.org/" target="_blank">Adhesion Scout</a></li>
                <li><a href="https://web.facebook.com/scoutascci" target="_blank">Facebook Scout de Côte D'Ivoire</a></li>
                <li><a href="https://web.facebook.com/districtAB" target="_blank">Facebook Scout Bingerville</a></li>
            </ul>
        </section>
        <section class="rightbox">
            <span><img src="../Images/OMMS.png" alt="OMMS"></span>
            <span><img class="img-ascci" src="../Images/240px-Scouts_de_côte_d'Ivoire.png" alt="ASCCI"></span>
            <span><img class="img-logo" src="../Images/Logo DA.png" alt=""></span>
            <span><img class="img-logo" src="../Images/Logo ABC.png" alt="Abidjan Bingerville centre"></span>
        </section>
    </footer>
</body>
</html>
<!-- Scripts JS -->
<script src="../js/scripts.js"></script>
<script src="../js/zoom.js"></script>