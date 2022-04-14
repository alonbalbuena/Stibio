import * as chokidar from "chokidar";
import { exec } from "child_process";
import { readTsConfig } from "./readTsConfig.js";

function syncStatics(from, to) {
  exec(
    `rsync -zrv --include='*/' --include='*.html' --include='*.css' --exclude='*' ${from}/ ${to}/`
  );
  console.log("\x1b[42m\x1b[30m Complete sync done\x1b[0m");
}

export async function observeStatics(TSCONFIG_PATH) {
  const { rootDir, outDir } = await readTsConfig(TSCONFIG_PATH);
  syncStatics(rootDir, outDir);
  chokidar
    .watch(`${rootDir}/**/*.css`, {
      recursive: true,
      persistent: true,
      ignoreInitial: true,
      usePolling: true,
    })
    .on("all", (event, filename) => {
      console.info(
        "reloading due to \x1b[33m%s\x1b[0m in \x1b[36m%s\x1b[0m",
        event,
        filename
      );
      syncStatics(rootDir, outDir);
    });
}
