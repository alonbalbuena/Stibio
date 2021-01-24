import APIConfiguration from "./APIConfiguration.js";
import APISearch from "./APISearch.js";

export default interface APIResponse {
  search: APISearch;
  configuration: APIConfiguration;
}
