declare namespace CSS {
  function escape(ident: string): string;
  function supports(property: string, value: string): boolean;
  function supports(conditionText: string): boolean;
  function registerProperty(arg0: {
    name: string;
    syntax: string;
    inherits: boolean;
    initialValue: string;
  }): void;
}
