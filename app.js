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
const parent = React.createElement("div",{id:'parent'},
    React.createElement('div',{id:'child'},
        [React.createElement('h1',{},"I'm an H1 tag"), React.createElement('h2',{},"I'm an H2 tag")]
    )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);