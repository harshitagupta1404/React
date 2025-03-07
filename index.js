import React from 'react'
import ReactDOM from 'react-dom/client'

// second argument in createElement gives attribute to our tag
// heading is a ReactElement, which is a JS object
// const heading = React.createElement("h1", {id:"heading",xyz:"abc"}, "Hello world from React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// -------------------------------
/*  Implement below using React
<div id="parent">
    <div id="child">
        <h1>I'm an H1 tag</h1>
    </div>
</div>
*/
// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:'child'},
//         React.createElement("h1",{},"I'm an H1 tag")
//     )
// )
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent)

// -------------------------------
/*  Implement below using React
<div id="parent">
    <div id="child">
        <h1>I'm an H1 tag</h1>    (adding siblings using array)
        <h2>I'm an H2 tag</h2>
    </div>
</div>
*/
// -----------------------
// const parent = React.createElement("div",{id:'parent'},
//     React.createElement('div',{id:'child'},
//         [React.createElement('h1',{},"I'm an H1 tag"), React.createElement('h2',{},"I'm an H2 tag")]
//     )
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);
// ---------------------------

// JSX - transpiled before it reaches JS engine - Done by Parcel - Babel (converts JSX to Js code)
// Babel converts below jsx code to react.createElement
// const jsxHeading = <h1 id="heading">Learning React</h1>;
// console.log(jsxHeading);
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);
// ------------------------------

// React Functional Component
const Title = () => {
    return <p>Title Component</p>
}
// adding component inside component is COMPONENT COMPOSITION
const HeadingComponent = () => (<h1 id='heading'>
    React Component
    <Title/>
</h1>)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);