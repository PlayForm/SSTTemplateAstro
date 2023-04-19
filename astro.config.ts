// @ts-nocheck
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";
import aws from "astro-sst/lambda";
import { defineConfig } from "astro/config";
import worker from "astrojs-service-worker";

export default defineConfig({
	// TODO Place your site URL here
	// site: "",
	output: "server",
	adapter: aws(),
	integrations: [
		import.meta.env.MODE === "production" ? worker() : null,
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		rome({ logger: 1 }),
		compress({ logger: 1 }),
	],
});
