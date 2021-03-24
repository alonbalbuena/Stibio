import RouteData from "./RouteData.js";
export default class RouteEvent extends Event {
    details: RouteData;
    constructor(to: string, beforeUpdate?: () => Promise<void>, afterUpdate?: () => Promise<void>);
}
//# sourceMappingURL=RouteEvent.d.ts.map