import path from "path";
import { run } from "./spawn.js";
export function typeScriptCompiler(TSCONFIG_PATH) {
  const tsConfigPath = path.join(TSCONFIG_PATH, "tsconfig.json");
  run("npx", ["tsc", "--project", tsConfigPath, "--watch"], TSCONFIG_PATH);
}
