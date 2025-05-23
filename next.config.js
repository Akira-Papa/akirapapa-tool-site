const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true, // Static export requires unoptimized images
    },
    output: 'export',
    trailingSlash: false, // Disable trailing slash for better compatibility
    basePath: '',
    distDir: 'out',
    // Ensure all pages are statically generated
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
}

module.exports = nextConfig
