import Route from "./Route.js";

export const routes: Route[] = [
  {
    path: "", //this is replaced by "/"
    template: `<home-view></home-view>`,
  },
  {
    path: "/watched",
    template: `<watched-view></watched-view>`,
  },
];
