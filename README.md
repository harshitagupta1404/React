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

 # 2 types of rounting
 - Server side routing - Sends a network call to fetch the html page and reloads the whole page to render it. 
 - Client side routing - It doen't fetches any page. Just component renders