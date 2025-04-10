import { Cloudflare } from "cloudflare";

const email = process.env["CLOUDFLARE_EMAIL"];

console.log(`CLOUDFLARE_EMAIL: ${email}`);

const client = new Cloudflare({
  apiKey: process.env["CLOUDFLARE_API_KEY"],
  apiEmail: process.env["CLOUDFLARE_EMAIL"],
});

async function main() {
  const accounts = await client.accounts.list()
  console.log(accounts);
}

main()
