import Route from "./Route.js";
import RouteEvent from "./RouteEvent.js";
export default class Router {
    routes: Route[];
    view: Element;
    constructor(view: Element, routes: Route[]);
    handleEvent: (event: RouteEvent) => void;
    initRouter(): void;
    findRoute(path: string): Route;
    push(path: string, beforeUpdate?: () => Promise<void>, afterUpdate?: () => Promise<void>): void;
    pushState(path: string): Promise<void>;
}
//# sourceMappingURL=Router.d.ts.map