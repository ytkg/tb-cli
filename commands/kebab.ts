import { Command } from "../deps.ts";
import toKebabCase from "./lib/to-kebab-case.ts";

export class KebabCommand extends Command {
  constructor() {
    super();
    this.description("convert to kebab-case")
      .arguments("<title:string>")
      .action((_, title) => {
        console.log(toKebabCase(title));
      })
      .reset();
  }
}
