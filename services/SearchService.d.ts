import APIConfiguration from "../models/APIConfiguration.js";
import APIResponse from "../models/APIResponse.js";
import APISearch from "../models/APISearch.js";
export default class Service {
    protected headers: {
        Authorization: string;
        "Content-Type": string;
    };
    request(query: string): Promise<APIResponse>;
    getResults(query: string): Promise<APISearch>;
    getConfiguration(): Promise<APIConfiguration>;
}
//# sourceMappingURL=SearchService.d.ts.map