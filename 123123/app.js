// app.js 
const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("./middlewares/cors");
     // Импортируем роутеры
     const mainRoute = require('./routes/main');
     const gamesRouter = require('./routes/games'); 
     
     const PORT = 3000;
     const app = express();
    // Теперь клиент имеет доступ только к публичным файлам
    app.use(
      cors,
      bodyParser.json(),
      express.static(path.join(__dirname, 'public')),
      mainRoute,
      gamesRouter);
     
     app.listen(PORT, () => {
       console.log(`Server is running at PORT http://localhost:${PORT}`);
     })
     