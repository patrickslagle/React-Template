const express = require('express');
const app = express(); 

// app.get('/', (req, res) => {
//     res.sendFile('/home/slaglebagel17/Coding/Codesmith Junior/Week 5/Poop-Scoop/app/index.js')
// })

app.use(express.static(__dirname +'./../')); //serves the index.html
app.listen(3000, () => console.log('Listening on PORT: 3000'));


