FROM node:21

# Definir o diretório de trabalho no container
WORKDIR /

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta do backend
EXPOSE 3306

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]