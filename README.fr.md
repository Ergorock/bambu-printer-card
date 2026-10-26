# Bambu Printer Card

*[English version](README.md)*

Carte Lovelace qui regroupe toutes les informations d'une imprimante Bambu Lab
remontées par l'intégration HACS [`bambu_lab`](https://github.com/greghesp/ha-bambulab).

- En-tête : état, modèle, signal Wi-Fi, lumière de la chambre, actualisation forcée
- Caméra en direct, ou l'aperçu du modèle (bouton pour passer de l'un à l'autre), avec la progression en surimpression
- Erreurs HMS et erreurs d'impression, avec un lien vers le wiki Bambu
- Impression en cours : nom, étape, barre de progression, couches, temps restant, heure de fin estimée, poids et longueur de filament
- Commandes : pause, reprise, arrêt (confirmé par un second clic), profil de vitesse
- Températures de la buse et du plateau (et de la chambre si l'imprimante en a une) avec leur consigne ; un clic ouvre la fiche de l'entité pour modifier la consigne
- Ventilateurs
- AMS (couleur, type, quantité restante, emplacement actif, humidité) et bobine externe
- Détails : buse, plateau, profil, durée d'utilisation, timelapse, connexion, mise à jour du micrologiciel

- Prise connectée (optionnelle) : bouton marche/arrêt dans l'en-tête (l'extinction demande un second clic de confirmation, avec un avertissement si une impression est en cours), écran « Imprimante éteinte » avec un bouton Allumer, puissance et énergie si la prise les mesure

Un clic sur presque chaque élément ouvre la fiche (« more-info ») de l'entité correspondante.

La mise en page suit la largeur de la carte (container queries) : 1 colonne en dessous de 700 px, 2 colonnes jusqu'à 1100 px, 3 colonnes au-delà.
Pour une carte large dans une vue *sections*, mettez la section en pleine largeur (`column_span` égal au `max_columns` de la vue).

L'interface est disponible en français et en anglais (elle suit la langue de Home Assistant).

## Installation

### HACS (dépôt personnalisé)

1. HACS → menu ⋮ → *Dépôts personnalisés* → ajoutez `https://github.com/Ergorock/bambu-printer-card`, catégorie **Dashboard**.
2. Installez **Bambu Printer Card**, puis rechargez le navigateur.

### Manuelle

1. Copiez `bambu-printer-card.js` dans `config/www/bambu-printer-card.js`.
2. *Paramètres → Tableaux de bord → ⋮ → Ressources* : ajoutez `/local/bambu-printer-card.js?v=1.1.0` (type *Module JavaScript*).

Rechargez ensuite la page avec Ctrl+Maj+R.

## Configuration

Ajoutez la carte « Bambu Printer Card » depuis l'éditeur visuel, ou en YAML :

```yaml
type: custom:bambu-printer-card
device: 6a563c3a56e7cb6aecd12f463f278011
title: Imprimante 3D          # optionnel
show_camera: true
show_controls: true
show_temperatures: true
show_fans: true
show_ams: true
show_details: true
power_switch: switch.imprimante_3d_outlet   # optionnel
power_sensor: sensor.prise_puissance        # optionnel, en W
energy_sensor: sensor.prise_energie         # optionnel, en kWh
```

Les entités sont retrouvées à partir de l'appareil, grâce à leur `unique_id` : renommer les entités ne casse pas la carte.
Pour forcer une entité précise, utilisez `entities:` (clé `domaine.clé` → `entity_id`), par exemple
`sensor.nozzle_temp: sensor.ma_buse`.

## Développement

`demo.html` affiche la carte avec un faux `hass`, selon quatre scénarios (impression, pause avec erreur, veille, hors ligne).
Elle se lance avec la configuration `demo` de `.claude/launch.json` (http://localhost:8765/demo.html).
