import express, { Application, Request, Response } from "express";
import path, { dirname } from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app: Application = express();

app.use(express.static('dist'));

app.listen(8080, () => {
  console.log("server start, port 8080");
});

app.get("/", (req: Request, res: Response) => {
  res.sendFile('inicio.html',{root:path.join(__dirname,'..')});
});

console.log(path.join(__dirname,'..'))