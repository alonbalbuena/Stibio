export default class Router {
    constructor(view, routes) {
        this.handleEvent = (event) => {
            this.push(event.details.to, event.details.beforeRoute, event.details.afterRoute);
        };
        this.view = view;
        this.routes = routes;
        this.initRouter();
        view.addEventListener("route", { handleEvent: this.handleEvent }, false);
    }
    initRouter() {
        const url = globalThis.location.pathname;
        this.push(url);
    }
    findRoute(path) {
        return (this.routes.find((route) => route.path === path) ?? {
            path: "/",
            template: `<home-view></home-view>`,
        });
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
        const route = this.findRoute(path);
        this.view.children[1].innerHTML = route.template;
        return new Promise((resolve) => {
            window.history.pushState({}, "done", route.path);
            resolve();
        });
    }
}
//# sourceMappingURL=Router.js.map