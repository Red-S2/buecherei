module.exports = {
    plugins: [
        new webpack.DefinePlugin({
          'process.env': { NODE_ENV: JSON.stringify('production') }
      }),
   ]
}