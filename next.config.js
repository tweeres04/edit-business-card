const withPwa = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV !== 'production',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
}

module.exports = withPwa(nextConfig)
