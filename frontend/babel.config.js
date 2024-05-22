module.exports = {
   presets: [
     ['@babel/preset-env', { targets: "defaults" }],
     '@babel/preset-react'
   ],
   plugins: ['@babel/plugin-proposal-optional-chaining'],
   ignore: ['node_modules']
 };
 