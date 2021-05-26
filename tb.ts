import { parse } from "https://deno.land/std@0.97.0/flags/mod.ts";
import { VERSION } from "./version.ts";

function main() {
  const { _: args, ...options } = parse(Deno.args);

  if (options.version) {
    console.log(`tb-cli ${VERSION}`);
    Deno.exit(0);
  }
}

if (import.meta.main) {
  main();
}
