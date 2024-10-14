module.exports = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: 'https://content.goe.menu/',
                headers: [{
                    key: 'Netlify-Vary',
                    value: 'query'
                }]
            },
            {
                source: '/:path*',
                destination: 'https://content.goe.menu/:path*',
                headers: [{
                    key: 'Netlify-Vary',
                    value: 'query'
                }]
            },
        ]
    },
}
