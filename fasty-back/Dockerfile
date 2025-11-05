# Imagen base
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Compilamos el proyecto
RUN npm run build

# Exponemos el puerto donde corre Nest
EXPOSE 3000

# Comando para ejecutar la app
CMD ["npm", "run", "start:prod"]
