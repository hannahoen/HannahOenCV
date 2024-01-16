/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/HannahOenCV',
  images: {
    unoptimized: true
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
