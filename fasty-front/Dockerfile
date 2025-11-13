# Imagen base
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiamos package.json y lock
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto del servidor de desarrollo
EXPOSE 5173

# Ejecutar vite escuchando en 0.0.0.0 (todas las interfaces)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]

# En vez de esperar notificaciones del sistema operativo (que Windows no envía bien),
# Vite pasa a mirar los archivos cada 200 ms, así detecta todos los cambios. usa un poco más de CPU, pero en desarrollo es perfecto.
ENV CHOKIDAR_USEPOLLING=true
ENV CHOKIDAR_INTERVAL=200

