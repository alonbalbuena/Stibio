import Service from "./Service.js";
const body = document.querySelector("body") ?? document.body;
const servicio = new Service("3/search/movie?query=mad&language=es-ES&page=1&include_adult=true");
servicio
    .getResults()
    .then((result) => body.innerHTML = JSON.stringify(result));
//# sourceMappingURL=inicio.js.map