// @ts-nocheck
import { defineConfig } from "astro/config";

import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";
import aws from "astro-sst/lambda";

export default defineConfig({
	output: "server",
	adapter: aws(),

	// TODO Place your site URL here
	// site: "",
	integrations: [
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		rome({ logger: 1 }),
		compress({ logger: 1 }),
	],
});
