import express from "express";
import path, { dirname } from 'path';
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.static('dist'));
app.listen(8080, () => {
    console.log("server start, port 8080");
});
app.get("/", (_req, res) => {
    res.sendFile('inicio.html', { root: path.join(__dirname, '..') });
});
console.log(path.join(__dirname, '..'));
//# sourceMappingURL=index.js.map