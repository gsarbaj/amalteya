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
                                    'primary-color': '#663399',
                                    'link-color': '#663399',
                                    'border-radius-base': '3px',
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