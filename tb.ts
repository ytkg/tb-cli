import { parse } from "https://deno.land/std@0.97.0/flags/mod.ts";
import { VERSION } from "./version.ts";

const commands = {
  "open": "open takagi.blog",
};

async function main() {
  const { _: args, ...options } = parse(Deno.args);

  if (options.version) {
    console.log(`tb-cli ${VERSION}`);
    Deno.exit(0);
  }

  if (!(args.length > 0 && args[0] in commands)) {
    Deno.exit(0);
  }

  const command = args.shift();
  const { default: cmd } = await import(`./cli/${command}.ts`);

  await cmd();
}

if (import.meta.main) {
  main();
}
