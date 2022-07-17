import { existsSync, format, Command } from "../deps.ts";
import toKebabCase from "./lib/to-kebab-case.ts";

export class NewCommand extends Command {
  constructor() {
    super();
    this.description("create new article")
      .arguments("<title:string>")
      .option("-f, --force", "force")
      .action(async (options, title) => {
        const filePath = `content/blog/${toKebabCase(title)}.md`;
        const fileExists = existsSync(filePath);
        if (fileExists && !options.force) {
          console.log(
            "File already exists. with --force to overwrite files recklessly.",
          );
          Deno.exit(1);
        }

        const date = format(new Date(), "yyyy-MM-dd");
        const template = `---\ntitle: \ndate: ${date}\ntags: [""]\n---`;
        await Deno.writeTextFile(filePath, template);

        if (options.force) {
          console.log(`Recreate ${filePath}`);
        } else {
          console.log(`Create ${filePath}`);
        }
      })
      .reset();
  }
}
