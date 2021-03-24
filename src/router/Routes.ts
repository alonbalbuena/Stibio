import Route from "./Route.js";

export const routes: Route[] = [
  {
    path: "/Stibio/",
    template: `<home-view></home-view>`,
  },
  {
    path: "/Stibio/watched",
    template: `<watched-view></watched-view>`,
  }
];
