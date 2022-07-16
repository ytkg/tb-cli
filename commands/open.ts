import { Command, open } from "../deps.ts";

export class OpenCommand extends Command {
  constructor() {
    super();
    this.description("open takagi.blog")
      .action(async () => {
        await open("https://takagi.blog/");
      })
      .reset();
  }
}
