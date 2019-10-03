const storybookTsConfigPath = '../tsconfig.json'

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: storybookTsConfigPath
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          tsconfigPath: storybookTsConfigPath,
        }
      }
    ]
  })

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
}