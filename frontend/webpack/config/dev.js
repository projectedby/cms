import path from "path";
import { fileURLToPath } from 'url';

console.log(path.dirname(fileURLToPath(import.meta.url)));

export default {
    mode: "development",
    devtool: 'source-map',
    entry: './src/script.js',
    output: {
        filename: 'projectedby.js',
        path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../html/asset/javascript'),
        library: {
            type: "module"
        },
        clean: true
    },
    experiments: {
        outputModule: true
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    }
};
