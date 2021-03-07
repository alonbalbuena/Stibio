import { AnyMxRecord } from "dns";
import express, { Application, Request, Response } from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app: Application = express();

//scripts route /components/Glass.js
app.use("/scripts", express.static("dist"));
//css route /public/styles/glass.css
app.use("/public", express.static("public"));

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log("server started localhost:" + port);
});

app.get("/", (_req: Request, res: Response) => {
  res.sendFile("inicio.html", { root: path.join(__dirname, "..") });
});
