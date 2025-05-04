const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/presupuesto", (req, res) => {
  const { dni, capital } = req.body;

  if (!dni || !capital) {
    return res.status(400).json({ error: "DNI y capital son obligatorios" });
  }

  const precioAnual = 5.5 * capital;
  res.json({ dni, precioAnual });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
