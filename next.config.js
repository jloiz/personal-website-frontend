const repo = process.env.GITHUB_REPO || 'personal-website-frontend'
const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`
};

module.exports = nextConfig;