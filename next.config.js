const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [], // Add domains for external images here if needed
    },
    // Add any other Next.js configurations you might need here
    output: 'export',
    distDir: 'out',
    trailingSlash: true,
}

module.exports = nextConfig
