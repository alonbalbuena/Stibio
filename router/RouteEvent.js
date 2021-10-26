export default class RouteEvent extends Event {
    details;
    constructor(to, beforeUpdate = () => new Promise((resolve) => resolve()), afterUpdate = () => new Promise((resolve) => resolve())) {
        const details = {
            to: to,
            beforeRoute: beforeUpdate,
            afterRoute: afterUpdate,
        };
        const params = {
            bubbles: true,
            composed: true,
            detail: details,
        };
        super("route", params);
        this.details = details;
    }
}
//# sourceMappingURL=RouteEvent.js.map