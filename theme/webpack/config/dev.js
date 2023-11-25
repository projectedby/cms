import path from "path";
import { fileURLToPath } from 'url';

export default {
    mode: "development",
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: 'cms.js',
        path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../cms/asset/javascript'),
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
