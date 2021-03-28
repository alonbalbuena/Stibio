import { env } from "../env/actualEnvironment.js";
export const routes = [
    {
        path: env.landingRoute,
        template: `<home-view></home-view>`,
    },
    {
        path: `${env.landingRoute}watched`,
        template: `<watched-view></watched-view>`,
    },
];
//# sourceMappingURL=Routes.js.map