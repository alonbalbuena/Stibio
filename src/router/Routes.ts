import Route from "./Route.js";

export const routes: Route[] = [
  {
    path: "/",
    template: `<home-view></home-view>`,
  },
  {
    path: "/watched",
    template: `<watched-view></watched-view>`,
  },
];
