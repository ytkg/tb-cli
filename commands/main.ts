import { Command } from "../deps.ts";
import { OpenCommand } from "./open.ts";
import { NewCommand } from "./new.ts";
import { KebabCommand } from "./kebab.ts";

export class MainCommand extends Command {
  constructor() {
    super();
    this.name("tb-cli")
      .action(() => {
        this.showHelp();
      })
      .command("open", new OpenCommand())
      .command("new", new NewCommand())
      .command("kebab", new KebabCommand())
      .reset();
  }
}
