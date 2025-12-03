# === STAGE 1 : Build ===
FROM node:20-alpine AS build

# Installer python pour yt-dlp
RUN apk add --no-cache python3 py3-pip ffmpeg wget curl
RUN python3 -m venv /venv
ENV PATH="/venv/bin:$PATH"

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer toutes les dépendances (y compris dev)
RUN npm install

# Copier le reste du projet
COPY . .

# Copier les cookies
COPY ./cookies.txt /app/cookies.txt
RUN chmod 600 /app/cookies.txt

# Compiler le code TypeScript
RUN npm run build


# === STAGE 2: PRODUCTION ===
FROM node:20-alpine AS production

WORKDIR /app

# Copier uniquement le build et les fichiers nécessaires
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Installer uniquement les dépendances de production
RUN npm install --omit=dev

# Installer yt-dlp proprement
RUN apk add --no-cache python3 py3-pip ffmpeg
RUN pip3 install --break-system-packages yt-dlp

COPY .env .env
ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/main.js"]