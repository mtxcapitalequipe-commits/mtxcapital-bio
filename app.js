const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// ── Links (edite aqui) ─────────────────────────────────────
const links = [
  {
    title: 'Site Oficial',
    url: 'https://www.mtxcapital.com.br',
    icon: 'globe',
    description: 'Conheça a MTX Capital'
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/@MTXCapital',
    icon: 'youtube',
    description: 'Nosso canal no YouTube'
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/company/mtx-capitall/about/',
    icon: 'linkedin',
    description: 'Conecte-se conosco'
  }
];

const profile = {
  name: 'MTX Capital',
  tagline: 'Investimentos & Capital'
};
// ────────────────────────────────────────────────────────────

app.get('/bio', (req, res) => {
  res.render('bio', { links, profile });
});

app.get('/', (req, res) => {
  res.redirect('/bio');
});

app.listen(PORT, () => {
  console.log(`MTX Bio Links rodando em http://localhost:${PORT}/bio`);
});

module.exports = app;
