export default async function (text: string) {
  console.log(await KebabCase(text));
  Deno.exit(0);
}

function KebabCase(text: string): string {
  return text.replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}
