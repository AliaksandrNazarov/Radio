module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./'],
        alias: {
          '@src': './src',
          '@api': './src/api',
          '@components': './src/components',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
