import fs from 'fs';
import path from 'path';

const SRC_DIR = path.resolve('./src');
const OUTPUT_FILE = path.resolve('./index.js');

(async () => {
    try {
        // Read all files in the `src` directory
        const files = fs.readdirSync(SRC_DIR).filter(file => file.endsWith('.js'));

        // Generate import statements and export mapping
        const imports = files
            .map(file => {
                const moduleName = path.basename(file, '.js');
                const prefixedName = `random_${moduleName}`;
                return `import ${prefixedName} from './src/${file}';`;
            })
            .join('\n');

        const exports = `export default {\n${files
            .map(file => {
                const moduleName = path.basename(file, '.js');
                const prefixedName = `random_${moduleName}`;
                return `    ${moduleName}: ${prefixedName},`;
            })
            .join('\n')}\n};`;

        // Combine imports and exports into one file
        const outputContent = `${imports}\n\n${exports}`;
        fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true }); // Ensure dist folder exists
        fs.writeFileSync(OUTPUT_FILE, outputContent);

        console.log(`Built ${OUTPUT_FILE}`);
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
})();
