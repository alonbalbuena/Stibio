import Route from "./Route.js";
import RouteEvent from "./RouteEvent.js";

export default class Router {
  routes!: Route[];
  view: Element;
  landingRoute: string;
  constructor(view: Element, routes: Route[], landingRoute: string) {
    this.landingRoute = landingRoute;
    this.view = view;
    this.appendUrlToRoutes(routes, landingRoute);
    this.initRouter(); // called when going loading a page for first time
    view.addEventListener("route", { handleEvent: this.handleEvent }, false);
  }

  handleEvent = (event: RouteEvent): void => {
    this.push(
      event.details.to,
      event.details.beforeRoute,
      event.details.afterRoute
    );
  };

  private appendUrlToRoutes(routes: Route[], landingRoute: string): void {
    this.routes = routes.map((route) => {
      return { ...route, path: landingRoute + route.path };
    });
  }

  initRouter(): void {
    const url = globalThis.location.pathname;
    this.push(url);
  }

  findRoute(path: string): Route {
    return this.routes.find((route) => route.path === path) ?? this.routes[0];
  }

  push(
    path: string,
    beforeUpdate = (): Promise<void> =>
      new Promise((resolve) => {
        resolve();
      }),
    afterUpdate = (): Promise<void> =>
      new Promise((resolve) => {
        resolve();
      })
  ): void {
    void beforeUpdate()
      .then(() => this.pushState(path))
      .then(() => afterUpdate());
  }

  async pushState(path: string): Promise<void> {
    const route = this.findRoute(path);

    this.view.children[1].innerHTML = route.template;

    return new Promise((resolve) => {
      window.history.pushState({}, "done", this.landingRoute + route.path);
      resolve();
    });
  }
}
