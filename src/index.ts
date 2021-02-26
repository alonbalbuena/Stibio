import express, { Application, Request, Response } from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app: Application = express();

app.use(express.static("dist"));

app.listen(31415, () => {
  console.log("server start, port 31415");
});

app.get("/", (_req: Request, res: Response) => {
  res.sendFile("inicio.html", { root: path.join(__dirname, "..") });
});

console.log(path.join(__dirname, ".."));
console.log("Current working directory: ", process.cwd());
