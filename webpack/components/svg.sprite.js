
module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: [
                        'svg-sprite-loader',
                        'svgo-loader'
                    ]
                }
            ]
        },
    }
}