import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import rollup_start_dev from './rollup_start_dev';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		// Workaround Electron missing the separated sourcemap file, so we
		// inline it instead. We still produce the separated file in production
		// mode just in case.
		sourcemap: production ? true : 'inline',
		format: 'iife',
		name: 'app',
		file: 'static/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('static/bundle.css');
			}
		}),

		resolve(),
		commonjs(),

		// In dev mode, call `npm run start:dev` once
		// the bundle has been generated
		!production && rollup_start_dev,

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	external: [
		'electron',
		'child_process',
		'fs',
		'path',
		'url',
		'module',
		'os'
	]	
};
