import express,{ static } from 'express';
import { resolve } from 'path';
const app = express();
const port = 3010;

app.use(static('static'));
app.set('view engine', 'jade')

app.get('/', (req, res) => {
  res.sendFile(resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
