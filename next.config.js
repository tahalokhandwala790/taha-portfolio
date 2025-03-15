/** @type {import('next').NextConfig} */
const nextConfig = {
    sentry: {
        disableServerWebpackPlugin: true,
        disableClientWebpackPlugin: true,
    },
};

module.exports = nextConfig;