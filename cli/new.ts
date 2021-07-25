import { format } from "https://deno.land/std@0.97.0/datetime/mod.ts";
import { existsSync } from "https://deno.land/std@0.97.0/fs/exists.ts";
import toKebabCase from "./helpers/to-kebab-case.ts";

export default async function (fileName: string, forceNew: boolean) {
  if (fileName === undefined) {
    console.log("The file name is required!");
    console.log("tb new <file name>");
    Deno.exit(1);
  }

  const filePath = `content/blog/${toKebabCase(fileName)}.md`;
  const fileExists = existsSync(filePath);
  if (fileExists && !forceNew) {
    console.log("File already exists. with --force to overwrite files recklessly.");
    Deno.exit(1);
  }

  const date = format(new Date(), "yyyy-MM-dd");
  const template = `---\ntitle: \ndate: ${date}\ntags: [""]\n---`
  await Deno.writeTextFile(filePath, template)

  if (forceNew) {
    console.log(`Recreate ${filePath}`);
  } else {
    console.log(`Create ${filePath}`);
  }
  Deno.exit(0);
}
