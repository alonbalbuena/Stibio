import IEnvironment from "./IEnvironment.js";

export const envs: { development: IEnvironment; production: IEnvironment } = {
  development: {
    landingRoute: "/",
  },
  production: { landingRoute: "/Stibio" },
};
