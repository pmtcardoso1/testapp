module.exports = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: 'https://content.goe.menu/',
                headers: { 'Netlify-Vary': 'query' },
            },
            {
                source: '/:path*',
                destination: 'https://content.goe.menu/:path*',
                headers: { 'Netlify-Vary': 'query' },
            },
        ]
    },
}
