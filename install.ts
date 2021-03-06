if (import.meta.main) {
  const p = Deno.run({
    cmd: [
      "deno",
      "install",
      "--allow-read",
      "--allow-write",
      "--allow-net",
      "--allow-run",
      "-f",
      "-n",
      "tb",
      "cli.ts",
    ],
    stdout: "null",
    stderr: "inherit",
  });

  const status = await p.status();

  if (status.success) {
    console.log("tb-cli was installed successfully.");
  }

  Deno.exit(status.code);
}
