/** @type {import('next').NextConfig} */
const nextConfig = {

   /*images: {
		domains: ['cdn.sanity.io']
	},*/
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ecommerce3.sanity.studio',
        port: '',
        pathname: '/**',
      },
    ],
  },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
}

module.exports = nextConfig
