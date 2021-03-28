import Route from "./Route.js";
import { env } from "../env/actualEnvironment.js";

export const routes: Route[] = [
  {
    path: env.landingRoute,
    template: `<home-view></home-view>`,
  },
  {
    path: `${env.landingRoute}watched`,
    template: `<watched-view></watched-view>`,
  },
];
