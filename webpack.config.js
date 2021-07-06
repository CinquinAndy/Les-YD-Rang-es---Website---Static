module.exports = {
    entry: {
        main:"./src/js/main.js",
        mainActivity:"./src/js/main_activity.js"
    },
    output: {
        // eslint-disable-next-line no-undef
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }]
    }
};
