# Auth Demo - Node.js Authentication API

Une API d'authentification robuste construite avec Node.js, Express, MongoDB et JSON Web Tokens (JWT).

## 🚀 Fonctionnalités

- **Authentification JWT** : Sécurisation des routes avec des jetons auto-gérés.
- **Hachage de mot de passe** : Utilisation de `bcryptjs` pour une sécurité maximale.
- **Validation des données** : Validation stricte des entrées avec `express-validator`.
- **Base de données flexible** : Supporte MongoDB local et possède un fallback automatique vers une base de données en mémoire (`mongodb-memory-server`) pour les tests rapides.
- **Interface de Test Intégrée** : Une interface frontend moderne pour tester l'inscription et la connexion directement dans le navigateur.

## 🛠️ Structure du Projet

```text
auth-demo/
│
├─ src/
│   ├─ config/
│   │   └─ db.js               # Connexion à MongoDB
│   ├─ middlewares/
│   │   └─ auth.js              # Vérification JWT
│   ├─ models/
│   │   └─ User.js              # Schéma Mongoose
│   ├─ public/
│   │   └─ index.html           # Interface de test frontend
│   ├─ routes/
│   │   └─ auth.js              # Points d'accès /api/auth/
│   ├─ validators/
│   │   └─ authValidator.js    # Règles de validation
│   └─ server.js                # Point d'entrée
│
├─ .env                         # Variables d'environnement
└─ .gitignore
```

## 📦 Installation

1. **Cloner le dépôt**
   ```bash
   git clone <https://github.com/sheedrdh/Authentification-utilisateur-node.js>
   cd Authentification-utilisateur-node.js
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   Créez un fichier `.env` à la racine (ou utilisez celui généré) :
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/auth_demo
   JWT_SECRET=votre_secret_jwt
   JWT_EXPIRE=30d
   ```

## 🚦 Utilisation

### Lancer le serveur
```bash
npm start
# ou
node src/server.js
```

### Tester l'API
Ouvrez votre navigateur à l'adresse suivante pour accéder à l'interface de test interactive :
👉 **[http://localhost:5000](http://localhost:5000)**

## 🛡️ Endpoints API

| Méthode | Endpoint | Description | Accès |
| :--- | :--- | :--- | :--- |
| POST | `/api/auth/register` | Inscrire un nouvel utilisateur | Public |
| POST | `/api/auth/login` | Connecter un utilisateur | Public |

## 📝 Licence
Ce projet est sous licence ISC.
