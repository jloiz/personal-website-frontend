const repo =  'personal-website-frontend'
const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true, // optional but recommended for Pages
  images: {
    unoptimized: true, // helps for static export
  },
};

module.exports = nextConfig;