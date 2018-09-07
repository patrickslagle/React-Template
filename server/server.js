import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from '../client/components/App.js'

const app = express(); 

app.use(express.static(__dirname +'../public')); //serves the bundle

app.get("*", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Poop Scoop</title>
          <script src="/bundle.js" defer></script>
      </head>
      <body>
          <div id="root">${renderToString(<App/>)}</div>
      </body>
  </html>
  `)
})
app.listen(3000, () => console.log('Listening on PORT: 3000'));


