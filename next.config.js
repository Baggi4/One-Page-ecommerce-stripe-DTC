/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    dangerouslyAllowSVG: true,
		domains: ['cdn.sanity.io', "tailwindui.com"]
	}
}

module.exports = nextConfig
