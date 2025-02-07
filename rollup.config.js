import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";
import sveltePreprocess from "svelte-preprocess";
import purgecssFromSvelte from "./configs/purgecssFromSvelte";

const mode = process.env.NODE_ENV || "development";
const apiBaseUrl =
	mode === "development"
		? "http://localhost:4040/api"
		: mode === "production"
		? "https://napi.prepseed.com"
		: "invalid-api.prepseed.com";
const cacheApiBaseUrl =
	mode === "production" ? "https://napi.prepleaf.com" : apiBaseUrl;
const device = ["mobile", "tablet", "desktop"].includes(process.env.DEVICE)
	? process.env.DEVICE
	: "desktop";
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;
console.log(`creating build for device:${device}, environment:${mode}`);

const onwarn = (warning, onwarn) =>
	(warning.code === "MISSING_EXPORT" && /'preload'/.test(warning.message)) ||
	(warning.code === "CIRCULAR_DEPENDENCY" &&
		/[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);

function svelteExtractor(content) {
	return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
}

const postcssPlugins = (purgecss = false) => {
	return [
		// Do not purge the CSS in dev mode to be able to play with classes in the browser dev-tools.
		purgecss &&
			require("@fullhuman/postcss-purgecss")({
				content: [
					"./src/**/*.html",
					"./src/**/*.svelte",
					"./src/**/*.css",
					"./static/**/*.css",
					"./src/**/*.scss",
				],
				extractors: [
					{
						extractor: purgecssFromSvelte,

						// Specify the file extensions to include when scanning for
						// class names.
						extensions: ["svelte"],
					},
				],
				fontFace: true,
				// Whitelist selectors to stop Purgecss from removing them from your CSS.
				whitelist: ["html", "body"],
			}),
		require("autoprefixer"),
		purgecss &&
			require("cssnano")({
				preset: "default",
			}),
	].filter(Boolean);
};

const preprocess = sveltePreprocess({
	preserve: ["ld+json"],
	scss: {
		includePaths: ["src", "node_modules"],
	},
	postcss: {
		plugins: postcssPlugins(!dev),
	},
});

export default {
	client: {
		preserveEntrySignatures: false,
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode),
				"process.env.DEVICE": JSON.stringify(device),
				"process.env.API_BASE_URL": JSON.stringify(apiBaseUrl),
				"process.env.CACHE_API_BASE_URL": JSON.stringify(
					cacheApiBaseUrl
				),
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: false,
				preprocess,
			}),
			resolve({
				browser: true,
				dedupe: ["svelte"],
			}),
			commonjs(),

			legacy &&
				babel({
					extensions: [".js", ".mjs", ".html", ".svelte"],
					runtimeHelpers: true,
					exclude: ["node_modules/@babel/**"],
					presets: [
						[
							"@babel/preset-env",
							{
								targets: "> 0.25%, not dead",
							},
						],
					],
					plugins: [
						"@babel/plugin-syntax-dynamic-import",
						[
							"@babel/plugin-transform-runtime",
							{
								useESModules: true,
							},
						],
					],
				}),

			!dev &&
				terser({
					module: true,
				}),
		],

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				"process.browser": false,
				"process.env.NODE_ENV": JSON.stringify(mode),
			}),
			svelte({
				generate: "ssr",
				dev,
				preprocess,
			}),
			resolve({
				dedupe: ["svelte"],
			}),
			commonjs(),
		],
		external: Object.keys(pkg.dependencies).concat(
			require("module").builtinModules ||
				Object.keys(process.binding("natives"))
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode),
			}),
			commonjs(),
			!dev && terser(),
		],

		onwarn,
	},
};
