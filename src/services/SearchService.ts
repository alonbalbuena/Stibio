import APIConfiguration from "../models/APIConfiguration.js";
import APIResponse from "../models/APIResponse.js";
import APISearch from "../models/APISearch.js";

export default class Service {
  protected headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjVlMjZiYWQ4OGNlYjM3ODEzMjhiYmI2MGRjMTA5NCIsInN1YiI6IjVmNzllMDBiOWE2NDM1MDAzNmE2NTdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cWjSac35Ni053K6oss4iD7qM9IWeM-TT2zb3DQhbACw",
    "Content-Type": "application/json;charset=utf-8",
  };
  request(query: string): Promise<APIResponse> {
    return Promise.all<APISearch, APIConfiguration>([
      this.getResults(query),
      this.getConfiguration(),
    ]).then(([search, configuration]) => {
      return { search: search, configuration: configuration };
    });
  }
  getResults(query: string): Promise<APISearch> {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&language=es-ES&page=1&include_adult=true`,
      {
        method: "GET",
        headers: this.headers,
        credentials: "same-origin",
      }
    ).then((response: Response) => response.json() as Promise<APISearch>);
  }
  getConfiguration(): Promise<APIConfiguration> {
    return fetch("https://api.themoviedb.org/3/configuration", {
      method: "GET",
      headers: this.headers,
      credentials: "same-origin",
    }).then(
      (response: Response) => response.json() as Promise<APIConfiguration>
    );
  }
}
