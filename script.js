/* =====================================
   SCRIPT HUBISOCER
   - Maillot dynamique
   - Confirmation inscription
   - Autres interactions
===================================== */

/* ====== CHANGEMENT DE MAILLOT ====== */
const maillotImage = document.getElementById('maillot-image');
const colorSelect = document.getElementById('color-select');

if (maillotImage && colorSelect) {
    colorSelect.addEventListener('change', function() {
        const color = this.value;

        const images = {
            blanc: 'images/maillot-blanc.png',
            violet: 'images/maillot-violet.png',
            jaune: 'images/maillot-jaune.png',
            bleu: 'images/maillot-bleu.png'
        };

        maillotImage.src = images[color];
    });
}

/* ====== CONFIRMATION INSCRIPTION ====== */
const inscriptionForm = document.getElementById('inscription-form');

if (inscriptionForm) {
    inscriptionForm.addEventListener('submit', function(e) {
        e.preventDefault(); // empêche l’envoi classique

        // Récupération des infos du formulaire
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;

        // Message de confirmation
        alert(`Merci ${prenom} ${nom} !\nTon inscription a été reçue.\nTu recevras bientôt les instructions pour le paiement de 8€ et ton maillot.`);

        // Optionnel : redirection vers WhatsApp ou page de confirmation
        // window.location.href = "https://wa.me/229XXXXXXXX?text=Je souhaite m'inscrire au tournoi HubISoccer";
        
        // Réinitialiser le formulaire
        inscriptionForm.reset();
    });
}

/* ====== LICENCE DEMANDEE ====== */
const licenceForm = document.getElementById('licence-form');

if (licenceForm) {
    licenceForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nom = document.getElementById('licence-nom').value;
        const prenom = document.getElementById('licence-prenom').value;
        const numId = document.getElementById('licence-num').value;

        alert(`Licence demandée pour ${prenom} ${nom}.\nNuméro d'identification : ${numId}\nTu recevras ta carte de participation très bientôt.`);
        
        licenceForm.reset();
    });
}