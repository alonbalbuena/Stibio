import { spawn } from "child_process";

export function run(cmd, args, cwd) {
  const command = spawn(cmd, args, {
    cwd: cwd,
    //env: { FORCE_COLOR: true },
  });

  command.stdout.on("data", (data) => console.log(data.toString()));
  command.stderr.on("data", (data) => console.error(`[ERROR]: ${data}`));

  command.on("close", (code) => {
    if (code !== 0) {
      console.log(`ps process exited with code ${code}`);
    }
    command.stdin.end();
  });
  command.on("exit", (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
