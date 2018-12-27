import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.listen(port, () => console.log(`app listening on port ${port}`));