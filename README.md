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
Keys are used for elements that are part of a list created using iteration (map, array, loops). It does not depend on HTM tag type, but on whether react is rendering multiple sibling elements dynamically. <br>
* Keys are required only on top level elements returned inside a list.

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
 **** Never use <a> anchor tag in React. As it refreshes the entire page. 
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

# Redux Toolkit - uses Immer BTS - it says either mutate the state or return a new state
1. Install @reduxjs/toolkit and react-redux
2. Build a store (configureStore from @reduxjs/toolkit) - store has 1 big reducer
3. Connect the store to our app (via react-redux) - wrap <Provider store={}> around the section of the app where you want to use the store
4. Slice (Cart slice)
    a. Create a new file for slice. 
    b. Give name, initialState, reducer functions and export (for default export, you export a 'reducer').
    c. Add the reducer function to redux store file - a slice will have multiple reducers.
5. Dispatch action - using a hook useDispatch - Refer RestaurantMenu component
6. Selector - using useSelector - Refer Header Cart
*** Always subscribe to a smaller and correct portion of the store or else it can be a big performance loss.

* Redux Dev Tools extension used to debug redux extension


# IMPORTANT CONCEPT for event calling
onClick = {handleItem(item)} vs onClick = {() => handleItem(item)}

onClick = {handleItem(item)}  ----  calls the function on render but not click. It will call the function on render and assigns its return value to onClick

onClick = {() => handleItem(item)} -----   This creates a new function which will call handleItem only when clicked.

Anonymous function needs to be created only if we have arguments. If you don't have arguments, then you can directly use onClick={handleItem}

# 3 types of developer testing
1. Unit testing
2. Integration testing
3. End to end testing (e2e)

Library for testing
1. React Testing Library - This needs Jest
STEPS TO SETUP
a. Install React Testing : npm i -D @testing-library/react
b. Install jest : npm i -D jest
c. Install babel dependencies : If you go to jest website, you'll get more dependencies to be installed based on your project.
d. Configure babel : Follow the steps as needed in the doc.
Now the babel that we installed as part of above steps will interfere with babel in parcel
e. Configure Parcel config file to disable default babel transpilation
https://parceljs.org/languages/javascript/#usage-with-other-tools - copy the config here
f. Now run the cmd - npm run test to see if everything is WAI.
g. Jest configuration : npx init jest@latest
[TS - no, jsdom, babel]
h. Install JSdom library : npm install --save-dev jest-environment-jsdom
i. Install npm i -D @babel/preset-react to make JSX work in testcases
j. Include babel-preset inside the babel config
k. npm i -D @testing-library/jest-dom

Writing a testcase
1. Render something
2. Query something
3. Assert

**Ways to add CSS**
These are CSS libraries and frameworks
1. SCSS/SASS
2. Styled components
3. Material UI
4. Bootstrap
5. Chakra UI
6. Ant Design
7. Tailwind CSS

**Tailwind CSS** - It has class name for every CSS that you can apply. VSCode extension - Tailwind CSS IntelliSense
Eg - flex,
w-25 (gives width to that tag),
m-4 (gives margin), mb-2 (margin bottom), mx-2 (margin to horizontal axis -left and right)
p-4 (gives padding),
If you have to give a hardcoded value, then you can create a dynamic class using []. Eg - w-[200px]

VS Code Extension for Tailwind - Tailwind CSS IntelliSense

Cons of Tailwind - Less readable, comes with a learning curve
Pros of Tailwind - quick, light weight (When parcel makes a bundle of application, Tailwind includes only the CSS that is required on the webpage. If m-4 is used in multiple times, Tailwind includes just 1 m-4 class).

Refer to Header tailwind for some responsiveness based on screen size.

<b>NOTE</b> - If you have a very big form in your application, then consider using a library <b>Formik</b>

<b>useRef</b> is used to hold a mutable value that persists across renders and doesn't require a rerender. It returns a plain JavaScript object with a single, mutable property named '.current'. The object returned is mutable.
const ref = useRef(initialValue)
The implementation can be found in Netflix-GPT Login page
