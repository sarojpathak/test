

var webpack = require('webpack');
var path = require('path');//to concat two path
//to change build file like src ifle
module.exports = {
	//for debugging
	devtool:'inline-source-map',// eval-source-map
entry:{ //where to start 
	index:'./src/index.js'
},

output:{//two types of path: resolve, join
	//__dirname give path upto root which means upto font
	path: path.resolve(__dirname,'dist'),
	filename: 'main.js'
},

//to understand that js, css, html are used and loader is used
module:{//to write rules about what are to be takem
	rules: [//multiple rules //inside create different object
	{
		//babel user garera es6,7, es 5 , for browser compatiable
		//test means which file are to be converted using babel
		//regex: means writing rules in regex to take specific word from code and independent
		//regex start with // and edn wiht $
		//\this symbol means that . dot is not syntax dot but this is our not regex and $ means that file end with js
		test:/.\js$/,
		exclude:/node_modules/,
		use: 'babel-loader' 
	}
	]
},
//devserver to run the application, only in development node can be used in production

devServer:{
	//those content that are not generate by webpack
	contentBase: path.join(__dirname,"public/"),
	port:3000,
	//to serve webpack generate file
	hot:true,
	publicPath: "http://localhost:3000/dist/"
}
}