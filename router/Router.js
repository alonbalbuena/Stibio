export default class Router {
    routes;
    view;
    landingRoute;
    constructor(view, routes, landingRoute) {
        this.landingRoute = landingRoute;
        this.view = view;
        this.appendUrlToRoutes(routes, landingRoute);
        this.initRouter();
        view.addEventListener("route", { handleEvent: this.handleEvent }, false);
    }
    handleEvent = (event) => {
        this.push(event.details.to, event.details.beforeRoute, event.details.afterRoute);
    };
    appendUrlToRoutes(routes, landingRoute) {
        this.routes = routes.map((route) => {
            return { ...route, path: landingRoute + route.path };
        });
    }
    initRouter() {
        const url = globalThis.location.pathname;
        this.push(url);
    }
    findRoute(path) {
        return this.routes.find((route) => route.path === path) ?? this.routes[0];
    }
    push(path, beforeUpdate = () => new Promise((resolve) => {
        resolve();
    }), afterUpdate = () => new Promise((resolve) => {
        resolve();
    })) {
        void beforeUpdate()
            .then(() => this.pushState(path))
            .then(() => afterUpdate());
    }
    async pushState(path) {
        const route = this.findRoute(this.landingRoute + path);
        this.view.children[1].innerHTML = route.template;
        return new Promise((resolve) => {
            window.history.pushState({}, "done", route.path);
            resolve();
        });
    }
}
//# sourceMappingURL=Router.js.map