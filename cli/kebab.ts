import toKebabCase from "./helpers/to-kebab-case.ts";

export default function (text: string) {
  console.log(toKebabCase(text));
  Deno.exit(0);
}
