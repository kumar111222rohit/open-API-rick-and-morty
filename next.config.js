const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  distDir: 'build',
  assetPrefix: '',
  env: {
    API_BASE_URL: isProd
      ? 'https://rickandmortyapi.com'
      : 'https://rickandmortyapi.com',
  },
  webpack: config => {
    return config;
  },
};
