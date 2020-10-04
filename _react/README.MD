# React Interview QAs (Latest v: 16.13.1) - TS
## Part 1
### Q1. Name Life Cycle Methods and their Purpose
Ans: Lifecycle methods are changing. In new React, react hook uses useEffect to handle lifecycle methods. While the conventional class based approach has the following methods: under 3 stages (render, update/re-render and unmount)
1. **render**: Initial render
    - **constructor**: runs only once ---> set Initial state
    - **static getDerivedStateFromProps** ---> replacement of componentWillReceiveProps
        - Runs right after constructor. Has role in initial render and in re-render phase
        - set the state whenever there is a change in the props
        - it's a static method. Because we don't want user to access `this` keyword inside the method. As static methods are class methods and not instance methods. Thus can not execute `this.something`
        - returns new state or null
    - **render**
        - mandatory method
        - can not setState here (infinity loop. as change in state will create a re-render)
        - used to return JSX
    - **componentDidMount**
        - Runs after component is mounted
        - used to chain 3rd party calls after the component is mounted successfully.
2. **update/re-render**: after state changes
    - **static getDerivedStateFromProps**
    - **shouldComponentUpdate**
        - can control re-render of component based on return of true/false. (compare prev and next state and can decide)
    - **render**
    - **getSnapshotBeforeUpdate**
        - pre commit phase
        - called right after render before mounting the component
        - replacement for `componenetWillUpdate`
        - application: remember actions from right after render and just before mounting. ex: scroll positions, text positions etc.
        - useful as React recently introduced lazy loading of components. So, user might do some action viz scrolling before the component is mounted.
    - **componentDidUpdate**
        - Runs after component is updated
3. **componentWillUnmount**:
    - when component dies
4. **Error handling Methods**:
    - Error Boundary
        - getDerivedStateFromError()
        - componentDidCatch()

### Q2. Why do we use arrow function in React?
Ans: Click event handlers are class properties and not class fns like render. When we want to call a property or a function (click event handlers) inside class, we must either: 
- bind it in constructor so that the scope of 'this' keyword is correct or 
- we can use arrow function. Arrow fns doesn't have it's own this. So, it takes this from it's lexical scope.
- **Note**: Arrow fns will only work if babel is added to our project. Which is added by default if we have used `create-react-app` tool. So, arrow fn is less lines of codes and easy to write but it must be kept in mind that, it doesn't work out of the box. It works only if babel is added.
- This is still in experimental phase.

### Q3. Difference b/w defining state inside constructor and directly as a prop outside constructor?
Ans: React by default supports defining state inside of constructor using this.state or useState hook. The state prop can now be used directly in class. (New JS feature in React) But make sure that babel is added.
- This is still in experimental phase.

### Q4. How to prevent components from re-rendering?
Ans: There are 3 ways to do it: 
- `shouldComponentUpdate()`
    - life cycle method in re-render cycle which executes right before render(). And can return a true/false after comparing prev and next state. On returning false - it won't render further.
- `React.PureComponent`
    - PureComponent by default does a shallow comparison b/w prev and next state and if they are the same it stops the re-rendering. If we are using PureComponent, shouldComponentUpdate is redundant.
    - `class MyComponent extends React.PureComponent`
- `React.memo`
    - The above two approaches are for class based components. React.memo is for functional components.
    - It compares input and output. If output is same for the set of inputs it doesn't re-render.

### Q5. Explain Error boundaries in React?
Ans: It is similar to catch block in try, catch blocks from JavaScript.
- `<ErrorBoundaryComp><MyComp /></ErrorBoundaryComp>`
- ErrorBoundaryComp are special components and have special life cycle hooks
    - `static getDerivedStateFromError`: 
        - when an error occurs, we can change the state accordingly. Similar to getDerivedStateFromProps.
        - can have a fallback component to render when there is an error.
    - `componentDidCatch`: Method within which we can log the error message.

### Q6. Best Lifecycle method for making API calls
Ans: `componentDidMount`: Calling API will return some results and therefore will change state. Means, the DOM must already be ready before we get the new data from API. 

### Q7. React Patterns
1. **Context-API pattern:**
    - When we pass props to a deeply nested components, it is difficult. To solve that issue we have context. We can wrap our component with a special tag. And then we have a provider and a consumer. 
    - Provider component is higher in the tree that provides props via value attribute.
    - Consumer component is used to receive the props in child component.
2. **render props**
    - Using children as functions. So instead of passing components inside components. We pass functions in a class based component. Functions are re-usable.
3. **presentation component pattern**
    - The component whose primary job is to present something for just look and feel are written as stateless functional components.
    - On the other hand, components that holds more logic and decide how things work are written as stateful or class components.

### Q8. Why would you use React in your project?
Ans: Factors to consider:
- Project deadline: time to learn and implement. Plus if no major changes are upcoming in next releases.
- Compared to Angular and amber: Which are easy to configure but hard to use. They come in huge package. Ex: Angular comes with Angular CLI, router, testing all pre configured and ready to use. Thus angular is heavy. But react is much **light weight**. So for quick projects - better to go for Angular. While for Large projects with more scalability and better performance, it is better to go with React. But we will have to make a lot of decision on what to use and configure accordingly. And if we make a wrong decision we might have to pay the price.
- React is more **functional programming**. Thus better for JS savvy engineers.
- While in Angular: we have to remember a **lot of syntax**. But in React there isn't more of additional syntaxes. It is more aligned with JavaScript.

### Q9. CSS-IN-JS pattern in React?
Ans: CSS is global. And can easily impact different places if not done carefully. Solution: 
- Unique names,
- Shadow DOMs
- Since React is in JS. We can just **write inline CSS**. Which doesn't pollute other parts of our App.
- Also we can make our **CSS dynamic in JS** and conditionally apply one or other CSS.
- **Less cluttered project structure**. Since now we don't hv to create a separate file for keeping CSS.

### Q10. Why can't you update the state directly without setState?
Ans: Reasons:
1. state change is **asynchronous**. Thus, better to use setState method where we can have a callback to do something after the state has been changed. We won't have callback with directly changing the state.
2. If we try to change state directly, then it will try to immediately change & re-render the component: which is not suggested. (For performance reasons)
- Components re-renders when their state changes. (even if the value is not used in render)
- Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.

### Q11. How many ways you can conditionally render in React?
1. if statement: `if(true) { return <MyComp/> } else { return <YourComp/> }`
2. && expression: `{isTrue && <MyComp/>}`
3. conditional operator: `{isTrue ? (<MyComp/>) : (<YourComp/>)}`

### Q12. What is Fragments and why do we use them in React?
Ans: React Fragment allows us to wrap multiple child component. Without creating an additional HTML markup. Since in JSX we can't have more than one direct elements returned. **Single Child Rule**
- Syntax: `<React.Fragment><ChildA /><Child B/><Child C/></React.Fragment>`
- Note: Must have webpack configuration for this to work.

### Q13. How to do code-splitting in React?
Ans: When our project is bundled, it bundles all the code for our app in single file. Which might be large and unnecessary to load if user is visiting only a few pages. React fixed this by allowing us to create multiple bundles by introducing **dynamic imports and lazy loading**.
- `const LazyComp = React.lazy(() => import('./lazyComp'))`: This means this component lazyComp which is imported with `React.lazy()` will be a separate bundle.
- So after main app is loaded, lazyComp will load asynchronously.
- Also, while it's loading: we will have to provide some sort of fallback component viz Loader.
- Ex: `<Suspense fallback={<div>Loading...</div>}><LazyComp/></Suspense>`
- Suspense is a react component that react introduced along with Lazy component.

## Redux Questions - Part 3
### Q14. What are some alternatives to redux?
1. mobX
2. apollo client + graphQL
3. RxJS

### Q15. What is redux middleware?
Ans: Adds a middle layer.
- Redux architect: 
    - UI ---> POST ---> server ---> DB
    - UI ---> Action ---> reducer ---> Store
    - This might be problematic if DB update fails and DB, store won't be in sync.
- To fix this: we must have a middleware. Which gets response from server and then updates local store
    - UI ---> POST ---> server ---> DB
    - ...server ---> response ---> action ---> reducer ---> store
    - It makes sure local store and DB is always in sync

### Q16. Difference between redux saga and redux thunk
- They are both middlewares. They both do the same thing but little differently.
- **Redux Thunk**:
    - Concept: Doesn't run immediately like: `let a = 1;` But runs asynchronously: `AC = () => let a = 1;`
    - It has action creators (a JS function) which will post the data to server asynchronously and once the promise is resolved, it will hit the action and save it locally.
    - UI ---> Action Creator (Post and response) ---> server ---> DB
    - ...Action Creator (Post and response) ---> action ---> reducer ---> store
    - It doesn't send the action to reducer right away. It waits for the response from server and then sends the action.
- **Redux Saga**: 
    - It dispatches the action directly from UI. Then does async tasks to save data in DB and after getting a response, it sends another action to the reducer and then the DB.
    - UI ---> Action ---> Saga ---> server ---> DB
    - ...Saga ---> Another action ---> reducer ---> store
    - uses special fn called generator fn. (unlike thunk which uses promise). `function* gen(){ yield doFirst() yield doSecond() }` doSecond won't execute until doFirst is finished.
    - In saga, we can cancel the action.

## Project Related Questions
### Q17. How to optimize a React app?
1. Adk questions to Describe the application. 
    - How big is the application?
    - What does it do?
    - Which version of React it's running?
    - What kind of perfomance issues are we looking for?
2. Check performance in Profiler for the app. and analyze which areas are performing badly.
3. Look for common Possible issues:
    - speed issue because of unnecessary re-rendering. **Find unnecessary re-renders**. Ex: although not changing the state, setting the state over and over will cause the component to re-render
        - Fix by using: 
            - shouldComponentUpdate
            - PureComponent
            - React.memo etc
    - speed issue because of **huge bundle package**.
        - Fix by using lazy loading. `React.lazy`. Lazy load the components that user might load later on and not on main page or might not even use.
    - Check for API speed and report backend team to **check speed on server side**.
    - Check for **coding errors**
        - Ex: wrong methods used by inexperienced developers
        - Ex: updating state directly instead of setState method
    - **Think of immutability**
    - **CDN issues!** Check if all assets of our projects are loading fast enough. Try different CDN or reliable servers.
    - **functional vs class components!** Try to use functional approach if possible. It is much faster than class.
    - **Arrow fns are better**: for event handlers, arrow fns are faster than creating fn as property in class and then binding in constructor.
    - Use **third party analyzers** to analyze your app and tell you all the problems.

### Q18. Explain Virtual DOM
1. **Problem**: Updating DOM was expensive. 
2. **Solution**: 
    - Make it faster
    - Update as less as possible
3. React has a DOM of it's own which it creates during render, and it is called the virtual DOM. And any change in DOM happens when there is a change in state and prop.

### Q19. Bug Fixing
1. fns not bound properly
2. state may not be updating properly
3. typos etc

**Coding tips**
- 1. Use modern ES6+ standard: ex: use arrow fn instead of binding with class based component. Use function component instead of class component.
- 2. Componentize: Don't write all code in one file. Make components
- 3. Practice with a ToDo list from scratch
- 4. Use create-react-app
- 5. take home project

## React Hooks Interview
### Q20. What is React Hooks?
- Defn: Hooks are fns that lets you "**Hook into**" React **state** and **lifecycle features**  from **function components**.
- Prior to hooks, React was using classes based on OOP. And we had to use class property called state, lifecycle methods. Now after replacing classes with functions, there was a need of someway providing access to state and lifecycle methods.
- For state: in **Functional programming** - can use **Closures**

### Q21. Why React Hooks?
- Different way of doing same things.
- No more complex life cycle methods.
- Simpler code. No more mapStateToProps, mapDispatchToProps with Redux.
- Reusable code since basically functions that can be called from different component.
- Hooking into components is much easier.
- Since hooks are basically fns. We can use it as many times as we want. Unlike class method which can be used only once.

### Q22. Rules of React Hooks?
- Only call hooks at the top level
- Don't call hooks inside loops, conditions, or nested functions.
- Call hooks from React components or Custom hooks

### Q23. Map lifecycle class methods to lifecycle hooks
- There are 3 Stages of lifecycle:
    1. **initial render**
        - getDerivedStateFromProps
            - u`seEffect( () => {}, [prop1, prop2])`
        - componentDidMount
            - `useEffect( () => {}, [] )`: Runs on initial render and update
    2. **updates**
        - getDerivedStateFromProps
            - `useEffect( () => {}, [prop1, prop2])`
        - shouldComponentUpdate()
            - `useMemo()`
        - componentDidUpdate()
            - `useEffect( () => {}):` Runs on update only
        - getSnapshotBeforeUpdate
            - custom hook to hold previous state
            - rarely used
            - application: remember actions from right after render and just before mounting. ex: scroll positions, text positions etc.
            - useful as React recently introduced lazy loading of components. So, user might do some action viz scrolling before the component is mounted.
    3. **unmount**
        - componentWillUnmount
            - `useEffect( () => { return () => {// clean up} }, [] )`
    4. **Error Boundary**
        - getDerivedStateFromError()
        - componentDidCatch()
        - No hooks are available for error boundary lifecycle methods

### Q24. Upgrade Class project to hooks project
Steps:
1. Update react, react dom version to min 16.8+ that supports hooks
2. Test
3. Update code on route at a time
4. Test
5. this.state ---> useState
6. lifecycle events ---> useEffect
7. Test

### Q25. How to debug react hooks?
1. console.log
2. Debugger statements
3. React Developer tool (chrome plugin)
4. useDebugValue
5. Inspector

### Q26. Mistakes react programmer make and better to avoid
1. Inefficient project file structure
    - Ex: if a file is to be used with a specific component, it should stay on the same level. Ex: css file, or unit test file.
    - If file is common to many files, it should stay at a higher folder level.
2. Monolithic app
    - Ex: Componentize React app. Don't write everything in one component file.
    - Everything components.
    - Avoid duplicate code.
    - Flexible
    - Maintainable
3. Business logic in reusable components
    - All business logic shoould go on the main page. Not in the reusable component.
    - Reusable component should be dumb and must need data to work.
4. Redux to manage all the states
    - Ex: use Redux to store data from API etc in state. But data viz selected dropdown, filled form etc can be stored in state using this.state or useState.
    - Local data should be stored in state or localStorage. API datas should be stored in redux.
5. Not using right lifecycle method
    - Ex: API call should be made in `componentDidMount()` when DOM is ready.
6. Not having unit tests
    - Ex: make sure nothing breaks when there is a change
    - saves time during the long run
7. Not planning before coding
8. Not keeping up with upgrades
    - Frequently upgrade every 6 months and upgrade taking a week
9. Incorrect proptypes
    - Ex: string vs number `<comp x="2">` here we are passing string. `<comp x={2}>` while here it is being passed as number.
