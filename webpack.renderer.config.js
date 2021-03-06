const path = require("path");
const rules = require("./webpack.rules");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const assets = ["static"];
const copyPlugins = assets.map((asset) => {
    return new CopyWebpackPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, "src", asset),
                to: path.resolve(__dirname, ".webpack/renderer", asset),
            },
        ],
    });
});

rules.push({
    test: /\.css$/,
    use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

module.exports = {
    // Put your normal webpack config below here
    module: {
        rules,
    },
    plugins: [...copyPlugins],
};
