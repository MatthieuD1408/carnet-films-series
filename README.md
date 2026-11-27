# Mon carnet — films et séries

Un carnet pour se souvenir de ce qu'on a regardé sur **Netflix, Prime Video, Disney+ et TF1+**.

- Onglets par plateforme, plus un onglet **Tout** pour tout voir ensemble (et ne pas revoir deux fois le même film)
- Ajout d'un titre en **photo** (lecture automatique du texte, titre modifiable)
- Pour les séries : saisons et épisodes récupérés sur internet ([TVmaze](https://www.tvmaze.com)), avec cases à cocher
- Note de 0 à 10 et commentaire facultatif
- Tri alphabétique ou par date, recherche
- **Export Excel** (.xlsx) et **import** pour sauvegarder ou transférer la liste d'un téléphone à l'autre

## Utilisation

Ouvrir la page dans le navigateur du téléphone, puis l'installer pour l'avoir comme une appli :

- **Android (Chrome)** : menu en haut à droite de l'appli → *Installer l'appli*, ou menu de Chrome (⋮) → *Installer l'application*
- **iPhone (Safari)** : bouton Partager → *Sur l'écran d'accueil*

La liste est enregistrée **dans le téléphone** (rien n'est envoyé ailleurs). Pour la sauvegarder ou la copier sur un autre appareil : menu en haut à droite → *Exporter vers Excel*, puis *Importer un fichier* sur l'autre appareil.

## Technique

`index.html` contient toute l'appli ; `manifest.webmanifest`, `sw.js` et les icônes la rendent installable. Les données de séries viennent de l'API gratuite de TVmaze (CC BY-SA).
