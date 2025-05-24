#### 🌤️ WeatherApp - Previsão do Tempo

WeatherApp é uma aplicação web que permite ao usuário consultar a previsão do tempo em tempo real, fornecendo informações como temperatura, umidade, temperatura máxima e mínima e velocidade do vento. O projeto foi desenvolvido com foco em responsividade e consumo de APIs externas.

Este projeto foi criado como prática de integração com APIs REST, manipulação de dados assíncronos e design responsivo.

---

#### 🛠️ Tecnologias utilizadas:
- HTML5
- CSS3
- JavaScript
- OpenWeatherMap API
- Node.js
- Express
- Axios
- dotenv

---

#### ✅ Funcionalidades:
- Busca de clima por nome da cidade
- Exibição de dados climáticos atualizados
- Ícones dinâmicos conforme a condição do tempo
- Layout responsivo para diferentes tamanhos de tela
- **Backend seguro para esconder a chave da API do OpenWeatherMap**

---

#### 🗄️ Sobre o Backend

Para proteger a chave da API do OpenWeatherMap, foi criado um backend em Node.js utilizando Express, que serve como intermediário entre o frontend e a API externa.

**Como funciona:**

- O frontend envia a requisição para o backend, solicitando dados de clima para uma cidade.
- O backend, que possui a chave da API armazenada com segurança no arquivo `.env`, realiza a requisição para a API do OpenWeatherMap.
- O backend retorna ao frontend apenas os dados necessários, sem expor a chave de API no código cliente.
- Isso aumenta a segurança do projeto, evitando uso indevido da sua chave API.

**Tecnologias usadas no backend:**
- Node.js
- Express (framework web)
- Axios (para requisições HTTP)
- dotenv (para variáveis de ambiente)
- CORS (para liberar o acesso do frontend hospedado em outro domínio)

**Deploy:**
- Backend hospedado no [Render](https://weather-backend-xa86.onrender.com/weather?city=Novo%20Hamburgo)
- Frontend hospedado no [Vercel](https://weather-forecast-project-olive.vercel.app/)

---

#### 📱 Demonstração:
Acesse a aplicação em funcionamento: [Clique aqui](https://weather-forecast-project-olive.vercel.app/)
Ou veja o código completo no GitHub: [Repositório](https://github.com/larissavolfart/weather-forecast-project)

---

#### 👩‍💻 Feito por Larissa Volfart da Rocha
