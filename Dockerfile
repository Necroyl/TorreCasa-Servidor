# Utiliza una imagen base de Node.js adecuada
FROM node:14-alpine as builder

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY package*.json ./

# Instala las dependencias del servidor
RUN npm install
COPY . .

# Comando para ejecutar el servidor Node.js
CMD ["npm", "start"]