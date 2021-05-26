import { parse } from "https://deno.land/std@0.97.0/flags/mod.ts";
import { VERSION } from "./version.ts";

function main(args: string[]) {
  const parsedArgs = parse(args);

  if (parsedArgs.version) {
    console.log(`tb-cli ${VERSION}`);
    Deno.exit(0);
  }
}

if (import.meta.main) {
  main(Deno.args);
}
