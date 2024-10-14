module.exports = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [{
                    key: 'Netlify-Vary',
                    value: 'query=format'
                }]
            },
            {
                source: '/',
                headers: [{
                    key: 'Netlify-Vary',
                    value: 'query=format'
                }]
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: 'https://content.goe.menu/'
            },
            {
                source: '/:path*',
                destination: 'https://content.goe.menu/:path*'
            },
        ]
    },
}
