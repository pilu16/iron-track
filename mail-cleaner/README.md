# MAIL CLEANER — Nettoyez votre boîte Gmail

Application web 100 % côté client pour faire le ménage dans votre boîte Gmail :

- 🔍 **Analyse** votre boîte de réception et détecte les newsletters (emails contenant un lien de désabonnement ou l'en-tête `List-Unsubscribe`)
- 📊 **Regroupe par expéditeur** avec le nombre d'emails reçus, triés du plus envahissant au moins envahissant
- ✂️ **Désabonnement en un clic** : ouvre le lien de désabonnement, ou envoie automatiquement l'email de désinscription (`mailto:`) via l'API Gmail
- 🗑 **Suppression en masse** : met à la corbeille tous les emails d'un expéditeur (récupérables 30 jours)

Aucun serveur, aucune base de données : vos emails ne quittent jamais votre navigateur. Les appels se font directement entre votre navigateur et l'API Gmail de Google.

## Installation (≈ 5 minutes)

L'application a besoin d'un identifiant OAuth Google, gratuit et lié à votre propre compte :

1. Ouvrez la [Google Cloud Console](https://console.cloud.google.com/) et créez un projet (ex. « mail-cleaner »).
2. Dans **API et services → Bibliothèque**, recherchez **Gmail API** et cliquez sur **Activer**.
3. Dans **API et services → Écran de consentement OAuth** :
   - Type d'utilisateur : **Externe**, puis renseignez un nom d'application et votre email.
   - Dans **Utilisateurs test** (Audience), ajoutez votre adresse Gmail.
4. Dans **API et services → Identifiants → Créer des identifiants → ID client OAuth** :
   - Type : **Application Web**
   - **Origines JavaScript autorisées** : ajoutez l'URL où vous servez la page, par ex. `http://localhost:8000`
5. Copiez l'**ID client** généré (il se termine par `.apps.googleusercontent.com`).

## Lancement

L'OAuth Google exige que la page soit servie en HTTP (pas en `file://`) :

```bash
cd mail-cleaner
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

Au premier lancement, collez votre ID client, connectez-vous avec Google et lancez l'analyse.

## Notes

- **Permissions demandées** : le scope `gmail.modify` permet de lire les en-têtes, mettre à la corbeille et envoyer les emails de désabonnement. Rien n'est supprimé définitivement.
- L'analyse traite 300 emails par passe ; cliquez sur « Analyser plus d'emails » pour continuer sur les boîtes volumineuses.
- L'ID client est conservé dans le `localStorage` de votre navigateur, le jeton d'accès uniquement en mémoire.
