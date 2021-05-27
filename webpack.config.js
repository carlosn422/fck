// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/ui/",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [     
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.m?js/,
        resolve: {
            fullySpecified: false
        }
    },
       {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
    },
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js",".mjs"],
    alias: {
        data:  path.resolve(__dirname, 'src/data/'),
        components: path.resolve(__dirname, 'src/ui/components/'),
        router: path.resolve(__dirname, 'src/router/'),
        src: path.resolve(__dirname, 'src/*'),
        utils: path.resolve(__dirname, 'src/utils'),
        css: path.resolve(__dirname, 'src/ui/css/'),
        serverQueries: path.resolve(__dirname, 'src/data/serverQueries/'),
        clientQueries: path.resolve(__dirname, 'src/data/clientQueries/'),
        calendar: path.resolve(__dirname, 'src/ui/components/Calendar/'),
        Calendar: path.resolve(__dirname, 'src/ui/components/Calendar/'),
        'svg-icons':  path.resolve(__dirname, 'src/ui/svg-icons/'),
        'custom-typings': path.resolve(__dirname, 'src/custom-typings/'),
    
    },
    	
   

    


  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
