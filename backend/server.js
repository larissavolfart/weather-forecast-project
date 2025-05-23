const express = require('express');
const fetch = require('node-fetch'); // ou 'undici' se preferir
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = 3000;

// 1. Serve os arquivos estáticos da pasta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// 2. Rota principal: serve o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// 3. Rota da API /weather
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: 'Cidade não informada' });
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${process.env.API_KEY}&units=metric&lang=pt_br`);
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(data.cod).json(data);
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
