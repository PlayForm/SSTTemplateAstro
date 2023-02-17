// @ts-nocheck
import { defineConfig } from "astro/config";

import aws from "astro-sst/lambda";
import compress from "astro-compress";
import critters from "astro-critters";
import prefetch from "@astrojs/prefetch";
import rome from "astro-rome";
import sitemap from "@astrojs/sitemap";
import worker from "astrojs-service-worker";

export default defineConfig({
	output: "server",
	adapter: aws(),
	// TODO Place your site URL here
	// site: "",
	integrations: [
		worker(),
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		rome({ logger: 1 }),
		compress({ logger: 1 }),
	],
});
