import Route from "./Route.js";

export const routes: Route[] = [
  {
    path: "/dist/",
    template: `<home-view></home-view>`,
  },
  {
    path: "/dist/watched",
    template: `<watched-view></watched-view>`,
  }
];
