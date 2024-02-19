/* eslint-disable no-undef */
/* eslint-disable no-restricted-imports */
import { build } from 'esbuild';
import { sync } from 'glob';
import { readFileSync, writeFileSync } from 'fs';

const transpileNodeModules = async () => {
    // Get package.json file of mdb-reader module
    const packageJsonPath = './package.json';

    try {
        const json = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

        // Skip unless the type of the package is ESM
        if (!json.name || json.type !== 'module') {
            return;
        }

        console.log(`🦀 Transpiling ${json?.name}...`);

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
        json.type = 'commonjs';
        writeFileSync(packageJsonPath, JSON.stringify(json, null, 2));
    } catch (e) {
        console.log('Error: Wasnt able to run postinstall script. Make sure the packages inside oslo-extractor-uml-ea are installed.')
        console.error(e);
    }
}
transpileNodeModules();