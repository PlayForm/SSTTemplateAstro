export default {
	config(_input) {
		return {
			name: "astro-sst-template",
			region: "us-east-1",
		};
	},
	stacks({ stack }) {
		stack(async function Site({ stack }) {
			const { url } = new (await import("sst/constructs")).AstroSite(
				stack,
				"site",
			);

			stack.addOutputs({
				url: url || "http://localhost:3000",
			});
		});
	},
} satisfies SSTConfig;

import type { SSTConfig } from "sst";
