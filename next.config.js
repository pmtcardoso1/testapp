module.exports = {
    async headers() {
        return [
            {
                source: '/',
                headers: [{
                    key: 'Netlify-Vary',
                    value: 'query'
                }]
            },
            {
                source: '/:path*',
                headers: [{
                    key: 'Netlify-Vary',
                    value: 'query'
                }]
            },
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
