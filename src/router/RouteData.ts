export default interface RouteData {
  to: string;
  beforeRoute: () => Promise<void>;
  afterRoute: () => Promise<void>;
}
