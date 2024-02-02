export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
export default {
  plugins: {
    import: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
};