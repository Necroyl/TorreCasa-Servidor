# Utiliza una imagen base de Node.js adecuada
FROM node:14-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY servidor/ ./

# Instala las dependencias del servidor
RUN npm install

# Expone el puerto del servidor Node.js (si es necesario)
# EXPOSE 3000

# Comando para ejecutar el servidor Node.js
CMD ["npm", "start"]