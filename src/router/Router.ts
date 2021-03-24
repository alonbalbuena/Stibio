import { resolve } from "path";
import Route from "./Route.js";
import RouteEvent from "./RouteEvent.js";

export default class Router {
  routes: Route[];
  view: Element;
  constructor(view: Element, routes: Route[]) {
    this.view = view;
    this.routes = routes;
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

  initRouter(): void {
    const url = globalThis.location.pathname;
    this.push(url);
  }

  findRoute(path: string): Route {
    return (
      this.routes.find((route) => route.path === path) ?? {
        path: "/",
        template: `<home-view></home-view>`,
      }
    );
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
      window.history.pushState({}, "done", route.path);
      resolve();
    });
  }
}
