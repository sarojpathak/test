//commmon js
// require('react')
// module.exports = {}
// export.varname = 10;

//es6
//export default test
//export var a = 10;
import React from 'react';
import ReactDOM from 'react-dom';
// ReactDOM.render
// 	//first what to render
// 	//the element to be created is html
// 	React.createElement(
// 		'div',//actuall html element to be created
// 		{id:'test'},//properties,porps,id,class
// 		'This div is created using react',//3rd

// 		React.createElement('input'),
// 		React.createElement('p',null,new Date().toLocaleTimeString())
// 		),
// 	//where to render
// 	document.getElementById('react')

// 	)
// var test = (a,b) =>{

// };

// const renderer = () =>{
// 	document.getElementById("normal").innerHTML = 
//     <p>this is list <input></input></p> <p>${new Date().toLocaleTimeString()}</p>;

// }

// setInterval(renderer,1000);


// Chat conversation end
// Type a message...




// React.createElement('input')

// const lectire = 'This is react jsx'
// const element = <h1>This is testing {lectire}</h1>
// ReactDOM.render(element.document.getElementById('jsx'))
function Input(req){
	return <input type={req.type} placeholder={req.text}  style={{marginBottom: "15px",fontSize:"18px"}}  autofocus/>
}

ReactDOM.render(<Input type="text" text="User Name"  />, document.getElementById('username'))

ReactDOM.render(<Input type="password" text="password" />, document.getElementById('password'))


function Button(props) { //props to get the value dynamically 
	return <button type="submit" onClick={() => alert(props.label + " " + ' button clicked')} style={{backgroundColor: 'blue',marginBottom:"15px",fontSize:"18px"}}>{props.label}</button>
}


// This is to save
ReactDOM.render(<Button label="Login" />,document.getElementById('save'))


// This is to cancel
// ReactDOM.render(<Button label="Cancel" />,document.getElementById('cancel'))

