FROM node:20-alpine AS build

# Créer le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Construire l'application
RUN npm run build


# Étape 2 : serveur Nginx
FROM nginx:alpine
# copie du build vers le dossier servi par nginx
COPY --from=build /app/dist /usr/share/nginx/html
# copie de ta config nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]