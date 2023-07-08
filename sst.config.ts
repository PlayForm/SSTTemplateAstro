import { AstroSite } from "sst/constructs";
import type { SSTConfig } from "sst";

export default {
	config(_input) {
		return {
			name: "astro-sst-template",
			region: "us-east-1",
		};
	},
	stacks(app) {
		app.stack(function Site(ctx) {
			const site = new AstroSite(ctx.stack, "site");
			ctx.stack.addOutputs({
				url: site.url || "http://localhost:3000",
			});
		});
	},
} satisfies SSTConfig;
