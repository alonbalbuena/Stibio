import path from 'path'

export async function readTsConfig(tsConfigPath) {
  const tsConfig = await import(`${tsConfigPath}/tsconfig.json`, {
    assert: { type: "json" },
  });
  const rootDir = path.join(
    tsConfigPath,
    tsConfig.default.compilerOptions.rootDir
  );
  const outDir = path.join(
    tsConfigPath,
    tsConfig.default.compilerOptions.outDir
  );
  return { rootDir, outDir };
}
