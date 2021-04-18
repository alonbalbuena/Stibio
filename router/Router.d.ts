import Route from "./Route.js";
import RouteEvent from "./RouteEvent.js";
export default class Router {
    routes: Route[];
    view: Element;
    landingRoute: string;
    constructor(view: Element, routes: Route[], landingRoute: string);
    handleEvent: (event: RouteEvent) => void;
    private appendUrlToRoutes;
    initRouter(): void;
    findRoute(path: string): Route;
    push(path: string, beforeUpdate?: () => Promise<void>, afterUpdate?: () => Promise<void>): void;
    pushState(path: string): Promise<void>;
}
//# sourceMappingURL=Router.d.ts.map