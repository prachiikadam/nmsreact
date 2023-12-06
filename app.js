
import React from 'react';
import ReactDOM  from 'react-dom/client';

// second arg is for giving  attributes to a tags
const heading = React.createElement('h1',{},'Hello world')
//heading is a react element 
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))

//render method takes react elemnt whict is nothing but js object  and ocnvert it into h1 tag and put it up in dom
// root.render(heading)

/**
 * <div id="parent">
 *      <div id ="child">
 *       <h1></h1>
 *        <h1></h1>
 *      </div>
 * </div>
 */


// const heading2 = React.createElement('div',{id : "parent"},React.createElement('div',{id :'child'},[React.createElement('h1',{},'gsg'),React.createElement('h1',{},'Namaste react launch!!!!!')]))
// console.log('react element',heading2)
// //JSX
// const jsxheading = <h1 id="heading"> jsx heading react</h1>
// console.log('jsx',jsxheading)
// root.render(heading2)


/**
 * React element and react function
 */


const Title = (
    <h1>React elemnet</h1>
)

// const Title = () =>(
//     <h1>React elemnet</h1>
// )

//component composition

const HeadingComponent = () =>{
    return <div id="container">
        {/* <Title></Title> */}
        {Title}
        <h1>React functional component</h1>
    </div>
}

root.render(<HeadingComponent/>)



