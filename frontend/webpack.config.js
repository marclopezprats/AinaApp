const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('glob');

// Utiliza glob para obtener todos los archivos JS en el directorio static/js
const entryFiles = glob.sync('./static/js/*.js');

const entries = {};
entryFiles.forEach(file => {
  const name = path.basename(file, path.extname(file));
  entries[name] = file;
});

module.exports = {
  mode: 'production', // O 'development' según tu necesidad
  entry: entries, // Múltiples entradas desde el directorio static/js
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].min.js'
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true
        },
      },
    })],
  },
};
