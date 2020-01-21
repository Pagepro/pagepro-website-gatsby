const path = require('path');

const storybookTsConfigPath = path.resolve(__dirname, '../tsconfig.json');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: storybookTsConfigPath,
          errorsAsWarnings: true,
          reportFiles: ['src/**/*.{ts,tsx}'],
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          tsconfigPath: storybookTsConfigPath,
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx', 'd.ts');

  return config;
};
