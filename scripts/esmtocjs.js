/* eslint-disable no-undef */
/* eslint-disable no-restricted-imports */
import { build } from 'esbuild';
import { sync } from 'glob';

const transpileNodeModules = async () => {
    try {
        console.log(`🦀 Transpiling...`);

        const dir = "lib"

        // Get all .js files unless they are in a nested node_modules folder
        const entryPoints = sync(`${dir}/**/*.js`).filter(
            (d) => !d.includes(`${dir}/node_modules/`)
        );

        if (!entryPoints.length) {
            return;
        }

        // Transpile each .js file
        for (const file of entryPoints) {
            await build({
                entryPoints: [file],
                allowOverwrite: true,
                outfile: file,
                format: 'cjs',
                platform: 'node',
                logLevel: 'info',
                target: 'node18',
                sourcemap: false,
                bundle: false,
            });
        }

        // Change the type of the package to commonjs
    } catch (e) {
        console.log('Error: Wasnt able to run postinstall script.')
        console.error(e);
    }
}
transpileNodeModules();