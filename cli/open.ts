import { open } from "https://deno.land/x/opener@v1.0.1/mod.ts";

export default async function () {
  await open("https://takagi.blog/");
}
