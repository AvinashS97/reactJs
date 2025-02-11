export const App = () => {
return (
<h1> Hello, World! </h1>  
 )
}

OR

Behind the scene :-
import React from "react"
React.createElement('h1', null, "Hello, World!")
console.log(React.createElement('h1', null, "Hello, World!"))

Each JSX expressions must have one parent element, which means if you try to return multiple elements, React will throw an error.

Each JSX tags needs to be closed. You can use self-closing tags for elements that don't have children, eg., <img src="url" />

React Fragments:- It allow components to return multiple elements without adding extra nodes to the DOM.

Dynamic Values in JSX

1: Using Variables
You can anbed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

2: Expressions
JSX allows you to write JS expressions inside curly braces. This includes operations, functions calls and other JavaScript expressions that produce a value.

3: Functions Calls
Functions, especially those that return JSX, can be involved directly within your JSX.

Conditionals in JSX

Use conditional operator to show user can watch movie or not.
1 ---> Not recommended B/c it violet the DRY (Do not Repeat Yourself ) Rule.

2 Using Ternary Operators :- Inline COnditional Rendering

3 Conditional Attributes:

4 Using Conditional fns..

Import and Exports
Default Export & Import ---> A File can have only one default export.

Named Export & Import ---> A file can have multiple named export. While importing it, the import names must be same as export name.

Mixed Export & Import ---> A file can have One Default & Multiple Named export called Mixed Export...

Passing JSX as Props:-

JSX value should be either an expression or a quoted JSX text.
We can pass JSX as Props.
To access the child of parent, have to call it by {props.children}

CSS Style in JSX
Inline CSS ---> Inline styles are applied directly to the HTML elements via the style attribute. This approach uses JavaScript objects to define CSS properties and values.

# 1. JavaScript Object Syntax

Inline styles in React are specified using JavaScript objects. Property names are written in camelCase instead of the traditional Css kebab-case.

const style = {
backgroundColor: 'blue',
fontSize: '16px',
};

# 2. Units

For most numeric values, you need to specify units as a strong(e.g., '16px'). Some properties, like Z-Index, can take numeric values directly.

const style = {
padding: '10px',
z-index: 1,
}

# 3. Performance Considerations

Defining inline styles directly within he JSX can lead to performance issues a new object is created on every render. To avoid this, define styles outside of the render method or as constrants.

const buttonStyle = {
backgroundColor: 'blue',
color:'white',
}

function MyButton() {
return <button style ={buttonStyle}> click Me </button>;
}

# CSS conditional stylings in React js

You can use ternary operators to add conditional stylings to your CSS.

- Styled Components in React.js
  <npm install styled-components></>

Install Tailwind Css for Vite
<npm install -D tailwindcss postcss autoprefixer>
<npx tailwindcss init -p>

# Applying padding in Tailwind

- Using Extended Spacing Scale: If you've exteended the spacing scale, you can use the custom classes:
<div class="py-12 px-6">Content</div>

- Using Arbitrary Values:
You can use arbitrary vlaues directly:
<div class="py-[3.2rem] px-[1.2rem]">Content</div>

# V23- Event Handling in React.js

Event handling in React.js is process of capturing and responding to user interactions, such as clicks, keystrokes, or form submissions, within a React application.
Event Handling in React follows a similar pattern to standard JavaScript event handling but with some key differences, such as using synthetic event for cross-browser compatibility and providing consistent event handling across different elements and browsers.

# SyntheticBasedEvent in React:-

When you handle events in React, like clicking a button or typing in an input box, React wraps the native browser events in something called a Synthetic Event.

- Event naming conventions:-
  camelCase: Event names in JSX should be written in camelCase. uses prefix with 'on'.
  Eg:- onClick, onChange, onSubmit.

- Function Naming Conventions
  prefix with 'handle': It is a comman convention to prefix event handler functions with 'handle' to clearly indicate their purpose.
  Eg:- handleSubmit, handleChange...

# V24- Passing Events handlers as Props:-

Passing event handlers as props in React.js is a common pattern used to allow child componants to communicate with parent components.
This pattern is useful in various scenarios, including:-

- Form Handling:- Event handlers like onChange or onSubmit to form components allows the child components to update the form data and notify the parent component of changes.

- User Interaction:- Event handlers like onClick can be passed to interactive elements (buttons, links) to trigger specific actions in the parent component, such as opening a modal or navigating to a different page.

# V25- Event Propagation in React_Capturing, Bubbling, and Practical Implementation

Event Propagation Refers to the process of how events propagate or travel through the DOM hierarchy.

In JS, There are 2 phase of event propagation- Capturing phase, Bubbling phase.

Capturing Phase :- The event starts from the root of the DOM and goes down to the target element.

Bubbling Phase:- The event starts from the target element.By default nature of Event Propagation is Bubbling...

# V26- React States (useState() Hook)

State refers to an Object that holds data or information about the component.
State is dynamic and mutable, meaning it can change over time usually in response to user actions, server responses or other events.

useState:- It manages the state within function components, It allows you to declare and update state variable within a component.The function which starts with "use" is called hook...

Syntax:-
<const[count, setCount]= useState(0)>

- Need of State:-
  i) Dynamic UI Updates:- State allows your components to update dynamically in response to user input or other events. For Example:- in a form, the state might hold the current value of the input fields, updating in real-time as the user types.
  ii) Interactivity:- State makes your application interactive. such as clicks, form submissions, or keyboard inputs.

# V27- How React State Works

React Reconciliation is the process through which React updates the Browser DOM.
Diffing short for Differences Algorithm is used to differentiate the DOM tree for efficient updates.

- How rendering Works:-
  On the very first time react renders Parent Component, Child Component, AnotherChild Component and Sibling Components.
  After that, if there is changes in Parent Component, React will re-render ParentComponent and its Children.
  Sibling Component is not affected by the state change in Parent Component. Therefore, it will not be re-rendered.

# V28- Why the state value does not reset to its initial value on re-render?

First Render: const[count, setCount] = useState(0);
count is initialized to 0.
Button Click: increment function is called.
setCount(count + 1) updates count to 1.
Re-render: React re-renders the component.(When user cick button for the 2nd time)
const[count, setCount] = useState(0); sees that count is now 1 and it uses 1 as the current state.

So mainly, React preserves the state values to ensure the component behaves predictably even as it re-renders in response to changes in props, state updates, or other triggers.

# V29- React Js State Challenge

# V30- Derived State- Improve State Management and Remove Redundancy & Dependency.

Derived State is any state that can be computed based on other state or props. It is not stored directly in the component's state but is calculated when needed.
This approach avoid duplication and keeps the state simpler and more manageable.

Ex:- const userCount= users.length;

- Avoid Redundancy, Consistency, Simplicity

# V31- Lifting the State Up in React

Lifting State Up is a pattern in React where you move the state from child compponents to a common parent component so that multiple child components can share and synchronize this state.

- Use Case:- When you have two or more components that need to share the same state, you should lift the state up to their nearest common ancestor/parent. This allows these components to stay in sync and ensures that the state is managed in a single place.

# V42- Keys in Reacts.js

A string or a number that uniquely identifies it among other items in that array.
Keys tell React which array item each component corresponds to, so that it can match them up later.
This becomes important if your array items can move.(due to sorting), get inserted, or get deleted.

- Rules
  Keys must be unique among siblings
  Keys must not change

# V43- Short Circuit Evaluation

Logical OR (||):-
Syntax:- expression-1 || expression-2
If expression-1 is truthy, return expression-1. Otherwise, return expression-2.

Logical AND (&&):-
Syntax:- expression-1 && expression-2
If expression-1 is falsy, return expression-1. Otherwise, return expression-2.

# V44- React Hooks Rules

Hooks let you use different React features from out components.
It starts with 'use'... (useState, useEffect, useReducer).
It can only be used at the top level of your component.
(Do not call Hooks inside loops, conditions, or nested functions.)
Call Hooks only from React function components or custom Hooks. Do not call Hooks from regular JavaScript functions or in class components.
You can also create your own custom hooks by creating functions starting with use.... This ensures that React can identify a Hooks (useFetch, useForm).
Ensure Hooks are called in the same order.

# V45- UseState() Hook

Function passed to useState() and setState() runs twice during development mode to prevent developers from running side effects.
Side effects in programming refer to changes or interactions that occur outside the scope of a function or block of code.
React.js compares previous state and new state using Object.is(), if it finds both are same then it will ignore re-rendering.
React.js batches all setStates() inside a event handlers and run them at the same time, so if you try to access the value immediately after setting a state, then you will get old value as its asynchronous.

# V46- useState() Challenge


# V47- Controlled and UnControlled Inputs in React.js
*Controlled component* in React are those where form data is handled by React component state.
A controlled input is a form element (like <input>, <textarea>, or <select>) whose value is controlled by React state.
This means:
  * State Management: The value of the input field is controlled by React State (useState or this.state in class components).
  * Event Handlers: Changes to the input field (like typing into a text field) are handled by React event handlers (onChange, onBlur, etc.)
  * State Update: When the user interacts with the form input, React state is updated through event handlers, and the input value reflects the current state value.

*UnControlled Component* in React are those where form data is handled by the DOM itself.
This means:
  * Direct DOM Manipulation: The value of the input field is controlled by the DOM (document.getElementById,etc.).
  * Event Handling: Changes are directly handled by DOM events (onchange, onblur, etc.).
  * Accessing Form Data: Form data is accessed through refs or DOM traversal methods, not through React state.

Pros: React has complete control over the input values, making it straightforward to implement features like validation and conditional formatting based on state.
Easier to handle form submission and integration with React's lifecycle methods.
Enable clear data flow and centralized state management within React components.

Cons: Require more code compared to uncontrolled components due to state management.
Can lead to more re-renders if not optimized, although React handles this efficiently in cases.

# V53- useEffect Hook 
The useEffect hook in React is used for handling side-effect in functional components.

    < useEfffect(()=> {
      //Your side effect code here

      return ()=> {
        // Cleanup code Here(optional)
      };
    },[dependencies])>

* External source of data ke saath deal krna ho to useEffect hook ka use kre.
* Initial Render: When the component mounts, useEffect can run its effect function to perform operations like data fetching.
* Dependencies: The 2nd argument, an array of dependencies, which determines when the effect should re-run. If any value in this array changes, the effect will re-run.
* Cleanup: useEffect can return a cleanup function to clean up effect, such as unsubscribing from an event or clearing a timer.

* Side-Effect => A side Effect is any operation that affects something outside the scope of a function (Pure function). In React, side effect are managed using hook like useEffect to ensure they are handled in a controlled an predictable manner. 
This includes tasks like: Fetching Data as a Side Effect-
When you fetch data in a React component, you're performing a side effect because:
External Interaction: You're interacting with an external data source, such as an API or a server.
State Updates: The fetched data will usually update the component's state, causing a re-render.

# V54- useEffect Cleanup function
      return ()=> {
        // Cleanup code Here
      };

# V61- useRef Hook in React to manage DOM elements and State easily
(It can hold a reference to a DOM element, allowing direct manipulation of that element.)

useRef is a React Hook that let you reference a value that's not needed for rendering.

Unlike states, it's directly mutable.

You can access value of its using useRef.current;

Unlike useState, changes to useRef do not cause re-renders.

Uncontrolled Components:
  * Uncontrolled components manage their own state internally and are typically used with refs.

# V62- No more forwardRef in React 19

* forwardRef - Allows parent component to move down refs to their children. It gives a child component a reference to DOM entity created by its parent component in React.  This helps the child to read and modify the element form any location where it is used.
                Syntax: <React.forwardRef ((props, ref) => { })>

# V63: useId Hook in React:
useId is a React Hook for generating unique Id's that cane be passed to accessibility attributes.
              Syntax: <const id = useId()>

# V64: prop Drilling in React Js:
* Props drilling is a pattern in React where you pass data from a parent component to deeply nested child components through multiple layers of components, even if some of the intermediate components don't need the data.
* As your component tree deepens, prop drilling can make the code more complex and harder to maintain.

    App --> Counter --> Child --> GrandChild --> GrandGrandChild
Now, we need Counter value in GrandGrandChild, just passing from Counter to GrandGrandChild is not possible.
To fix this problem we have Context API in React Js.

# V64.1: Context API & useContext Hook in React v19

* Context API: A way to pass data through the component tree without having to pass props down manually at every level.
* createContext: Created a Context object.
* Provider: A Component that provides the context value to its children.
* useContext (Consumer): A hook that allows you to consume a context.

  * Initial Value: We don't pass an initial value directly to the context.
  Context Creation: createContext returns a Context component, not a variable. The first letter of the Context component's name must be uppercase.
  * Provider Component: The Provider is a property of the Context component. We pass the value to the Provider. which makes it accessible to child components. The value should be passed inside double curly braces {{ }} if it's more than one.
  * Consuming Context Data: To access the context data, we use the useContext hook. As a parameter, we pass the entire context to useContext to access all values provided by the Provider.

# V65: The mistake and solutions in useContext hook:
  * In the Context API, the data provided by a context can only be accessed by the components that are its children within the component Tree. This means that any component that needs access to the context data must be a desendant of the provider component that supplies the context Value.

# V66: Create Custom Hook in React 19:
* Rules:
    Creating custom hook in React is a powerful way to encapsulate logic
  1. Prefix with use: Custom hook must start with the word 'use'.
  2. use Built-in Hooks: Custom hooks should utilize React's built-in hooks(eg., useState, useEffect, useContext) to leverage React's state and lifecycle features.
  3. Avoid Side Effect Outside Hooks: Side effects(eg., data fetching, subscriptions) should be managed within hooks using useEffect or other appropriate hooks.
  4. Keep Hooks Pure: Hooks should be free from side effects and return values or function that the component can use.

# V67: New "use" hooks in React:
* use can be called inside conditionals like if and loops like for. use is preferred over useContext because it is more flexible.

# V68: Build a React Website with Tailwind CSS:
Here's a summary of hte steps used to implement a Dark/Light mode toggle in React.

## Create a Context:

const ThemeContext = createContext();
This context will store the current theme and the function to toggle it.

## Create a Provider Component:
Define a ThemeProvider component that wraps its children with the ThemeContext.Provider.
Inside ThemeProvider, use the useState hook to manage the theme state, initialized to "light".
Define a toggleTheme function that switches the theme between "light" and "dark".

## Provide Context Values:
Pass the theme state and toggleTheme function as the value of the ThemeContext.Provider.
This allow any child component to access and manipulate the theme.

## Consume the context in a Component:
In the DarkLight component, use the use Hook to consume the ThemeContext. Destructure the theme and toggleTheme from the context.

## Apply Conditional Styling:
Use conditional class names to apply different styles based on the current theme value.
Adjust the background color, text color, and button lebel according to the current theme.

## Toggle the Theme:
Attach the toggleTheme function to a button's onClick event. This allows the user to switch between light and dark modes by clicking the button.

# V69: useReducer Hook in React:
* Syntax:  <const [state, dispatch] = useReducer (reducer, initialState);> 

It returns an Array with exactly two values: containing the current state and a dispatch function.
* Initial State: During the first render, it’s set to init(initialArg) or initialArg. The initial state value. (The initial state can be a simple value, an object, or even derived from a function if the initialization is complex.)
* Dispatch Function: is used to send actions to the reducer, which in turn updates the state based on the action's type and any associated data (payload). It do not have a return values.
* Reducer Function: A function that takes the current state and an action as arguments, and return a new state.