const path = require('path');

module.exports = {
  entry: './src/index.js', // Archivo de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    filename: 'bundle.js' // Nombre del archivo de salida
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "https": require.resolve("https-browserify"),
      "http": require.resolve("stream-http"),
      "querystring": require.resolve("querystring-es3"),
      "zlib": require.resolve("browserify-zlib")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Archivos JavaScript
        exclude: /node_modules/, // Excluir la carpeta node_modules
        use: {
          loader: 'babel-loader', // Usar Babel para transpilar el código
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Presets de Babel
          }
        }
      }
    ]
  }
};
