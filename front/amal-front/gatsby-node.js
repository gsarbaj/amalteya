exports.createPages = async ({actions}) => {
    const {createPage} = actions
    createPage({
        path: "/using-dsg",
        component: require.resolve("./src/templates/using-dsg.js"),
        context: {},
        defer: true,
    })
}


exports.onCreateWebpackConfig = ({actions}) => {
    actions.setWebpackConfig({
        module: {
            rules: [{
                test: /\.less$/,
                use: [
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    'primary-color': '#1DA57A',
                                    'link-color': '#1DA57A',
                                    'border-radius-base': '2px',
                                },
                                javascriptEnabled: true,
                            }
                        }
                    }
                ]
            }]
        }
    })
}