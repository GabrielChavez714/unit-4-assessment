const express = require('express');
const digimonCtrl = require('./controllers/digimonCtrl');
const digitalworldCtrl = require('./controllers/digitalworldCtrl');

const app = express();
const port = 5150

app.use(express.json())

app.get('/api/feral-digimon', digitalworldCtrl.getFeralDigimon);

app.get('/api/my-digimon', digimonCtrl.getMyDigimon);
app.post('/api/my-digimon', digimonCtrl.catchDigimon);
app.put('/api/my-digimon/:id', digimonCtrl.editName);
app.delete('/api/my-digimon/:id', digimonCtrl.releaseDigimon);

app.listen(port, () => console.log(`Listening in on the best digital server in the world ${port}`));

