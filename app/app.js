const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

if(process.env.NODE_ENV !== 'production'){

  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  const webpackMiddleware = require('webpack-dev-middleware');

  const compiler = webpack(webpackConfig);

  app.use(webpackMiddleware(compiler, {
    lazy: false,
    serverSideRender: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    stats: {
      colors: true,
    }
  }));

} else {

  app.use(cors());
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
  })

}

module.exports = app;
