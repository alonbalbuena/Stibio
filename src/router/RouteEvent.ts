import { resolve } from "path";
import RouteData from "./RouteData.js";

export default class RouteEvent extends Event {
  details: RouteData;
  constructor(
    to: string,
    beforeUpdate = (): Promise<void> => new Promise((resolve) => resolve()),
    afterUpdate = (): Promise<void> => new Promise((resolve) => resolve())
  ) {
    const details: RouteData = {
      to: to,
      beforeRoute: beforeUpdate,
      afterRoute: afterUpdate,
    };
    const params: CustomEventInit<RouteData> = {
      bubbles: true,
      composed: true,
      detail: details,
    };
    super("route", params);
    this.details = details;
  }
}
