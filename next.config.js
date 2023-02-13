module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.fallback = { fs: false };

    return config;
  },
};

const withYAML = require('next-yaml');
module.exports = withYAML(module.exports);
