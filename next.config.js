module.exports = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: 'https://content.goe.menu/',
            },
            {
                source: '/:path*',
                destination: 'https://content.goe.menu/:path*',
            },
        ]
    },
}
