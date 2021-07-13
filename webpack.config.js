// eslint-disable-next-line no-undef
module.exports = {
    entry: {
        main:"./src/js/main.js",
        mainActivity:"./src/js/main_activity.js",
        mainBlog:"./src/js/main_blog.js",
        mainPrestation:"./src/js/main_prestation.js",
        mainContact:"./src/js/main_contact.js",
        mainMentionsLegales:"./src/js/main_mentions_legales.js",
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
