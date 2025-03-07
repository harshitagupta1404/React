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

HOOKS - Normal JS utility functions
 - useState() - Super powerful state variables. Whenever a state variable changes, React rerenders the entire component.
 - useEffect() - If you wnt to do something after component render cycle is completed, you can do in useEffect.