import Service from "./Service";

const body = document.querySelector("body") ?? document.body;
const servicio = new Service("3/search/movie?language=es-ES&page=1&include_adult=true");

servicio
  .getResults()
  .then((result:any)=>body.innerHTML = JSON.stringify(result));
