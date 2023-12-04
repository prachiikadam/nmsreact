
import React from 'react';
import ReactDOM  from 'react-dom/client';

// second arg is for giving  attributes to a tags
const heading = React.createElement('h1',{},'Hello world')
//heading is a react element 
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))

//render method takes react object  and ocnvert it into h1 tag and put it up in dom
// root.render(heading)

/**
 * <div id="parent">
 *      <div id ="child">
 *       <h1></h1>
 *        <h1></h1>
 *      </div>
 * </div>
 */


const heading2 = React.createElement('div',{id : "parent"},React.createElement('div',{id :'child'},[React.createElement('h1',{},'gsg'),React.createElement('h1',{},'Namaste react launch!!!!!')]))
root.render(heading2)



