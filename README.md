Learn React with Akshay Saini (Namaste React)

We can do everything using HTML, CSS and Javascript. But we use React because it makes it easy to write code and optimizes things so that things happen fast on the webpage. It builds large scale production ready performant applications.

package-lock.json - keeps a track of exact version installed
package.json - keeps an approx version

Transitive dependencies - the package we installed might have some other dependencies and those dependencies might have some more dependencies

Every dependency has its own package.json

Build app using parcel - npx parcel index.html

props - these are like arguments to a function. Props are objects.

Config Driven UI - controlling your UI using config. Eg - UI for food apps can be different for different cities (offers can be different for different cities).

Keys are important in React, so that not all items have to be rerendered inside a container. It is used to uniquely identify the newly rendered item.
NOTE - Never use index as key.
not using keys (not acceptable) <<<< index as key <<<<< unique id (best practice)

EXPORTS - in 1 file we can have only 1 default export. If we want to export multiple things from a file, we can use Named exports (just add export in from of that).

<b>HOOKS</b> - Normal JS utility functions
 <b>- useState() -</b> 
     a. Super powerful state variables. Whenever a state variable changes, React rerenders the entire component.
     b. Used to create local state variable inside a functional components.
     c. Always call this inside functional component and try to mention them on top of the file.
     d. Never create useState hook inside an if else/for loop/functions. This will create inconsistencies.
 <b>- useEffect() -</b>
     a. If you want to do something after component render cycle is completed, you can do in useEffect.
     b. This is called everytime after component is rendered.
     c. Refer to 'Header' useEffect for some important concepts of useEffect.

<b>REACT FIBRE</b> - new reconciliation/rerender process to efficiently manipulate the DOM.

 <b>WHY REACT IS FAST</b> - The new reconciliation process which finds out the difference between 2 virtual DOMs and updates only the portion of DOM which is required.

 <b>createBrowserRouter</b> creates a routing configuration for us.
 <b>RouterProvider</b> will provide the routing configuration to our app.

 rafce (React Arrow Function Component Export) - type this inside a file to generate code for the component.

 <b>useRouteError (provided by react-router-dom) </b>- gives more info about the error
 <b>Outlet </b>- used to display different child components based on the matched routes.
 **** Never use <a> tag in React. As it refreshes the entire page. 
 Instead use <Link> component from react-router-dom  
 <b>useParams (provided by react-router-dom)</b> - allows us to access dynamic params in the URL. 

 # 2 types of routing
 - Server side routing - Sends a network call to fetch the html page and reloads the whole page to render it. 
 - Client side routing - It doen't fetches any page. Just component renders

 Class component lifecycle - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 Because 

# Steps for React app
1. npm install react, react-dom, parcel
2. create an HTML file with div element and id 'root'.
3. HTML should be pointing to js file using script tag
4. JS file should have a component which should be rendered using react dom.
5. Add run commnad to package.json


 Custom hooks vs JS functions - Custom hooks means there should be some React logic hidden. This hook will have it's own state, lifecycle.

HIGHER ORDER COMPONENTS - They take a component and return a component. That component is an enhanced version of input component.
-------------------------------------------
CONTEXT API------we can get the data anywhere in our app
1. Create Context  -
   import { createContext } from 'react';

const UserContext = createContext({
    loggedInUser : "Default User",
});

export default UserContext;

2. Use Context  -  useContext

** In Class based components, we can't use hooks. Hence, we can't need to use context in a different way.
<UserContext.Consumer>   // this has JSX which contains callback function
 {({loggedInUser})=>{
   console.log(loggedInUser);
   return <div>{loggedInUser}</div>
 }}
</UserContext.Consumer>

** We can set th scope of a Context by wrapping with Provider. Eg - <UserContext.Provider> </UserContext.Provider> (Here UserContext is the context name)
We can override the value inside the context using <UserContext.Provider value = {<value>}>  </UserContext.Provider>

------------------------------
* React and Redux are 2 different libraries. Zustand is another state management library
* Redux is a state management library which can be used with many other libraries and frameworks.
* Any application can be built without Redux
* Use Redux only for very large applications

# Redux Toolkit
1. Install @reduxjs/toolkit and react-redux
2. Build a store
3. Connect the store to our app
4. Slice (Cart slice)
5. Dispatch action
6. Selector
