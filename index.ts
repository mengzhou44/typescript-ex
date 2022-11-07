import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send(`<h2>Hello, Running on port: ${port}</h2>`);
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK')
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})

