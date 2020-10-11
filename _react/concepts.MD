# React Concepts

## 1. Explain Uni directional Data Flow in React?
Ans: No two way binding in React by default. Bind value from state to input and then onChange from input to set state.

## 2. props vs state
1. state: data that will change over time. state can be modified or mutated.
2. props: data that won't change or passed from parent component. Component can not change prop directly. It has to send a singal back to parent component and then parent component will have to change the data

## 3. Lift state up
1. If two sibling components are effected or dependent on same piece of data in state then instead of individually using those data in individual components, Lift the state up to parent component and pass data as prop to both the child.

## 4. Controlled and uncontrolled component
1. Controlled component: When an input is bound/being controlled by a piece of data from state. Ex: input value={state.inp}
2. Uncontrolled component: When an input is not being controlled by any state data.
    - to pass data into these: we need to use **ref**.
    - `ref={inputRef}` ref attribute
    - `inputRef=useRef()` useRef hook
    - `inputRef.current.value`

## 5. ref
1. `ref` gives developer **access to the underline DOM** and kind of not use the default virtual DOM.
    - Ex: setting focus on an input
    - `useEffect(() => { inputRef.current.focus() }, [])`
    - can be easily done in JS with just typing input.focus() but in React: we only have access to the virtual DOM. So, we must have to use ref to get access to the real underlying DOM.

## 6. keys? why is it important?
1. keys work as the unique identifier in list for React.
2. Don't use index (not recommended)
3. use something reliable like uuid()
    - bcoz index will change if we remove or add a new item and the entire DOM has to be repainted. bcoz react looks at the keys to reflect changes and not the data.
    - thus instead of using keys use unique identifier: like uuid() something which won't change if any data is added or removed. So React don't have to repaint the whole DOM again.

## 7. context?
1. context is a mechanism that allows us to pass data from one component to another component. Similar to prop
    - but prop can only go from parent to child. one level at a time **props drilling**
    - but context can go from parent to child at many levels.
2. Example: 
    * In parent: use createContext and Context.Provider
        - `const Context = React.createContext();`
        - `<Context.Provider value={1}></Context>`
    * In grand child: use `context = useContext(Context)`
        - or consumer in case of class based components

## 8. HOC
1. Still relevant in 2020
2. Still will be able to see in many code bases as other people had used it before.
    - slowly being replaced by hooks
3. Definition: 
    - A fn that receives a component as an argument and returns a newly augmented component.
4. helps in separating logic which will be used in wide set of components.
    - so we don't have to rewrite our original component

## 9. render props?
1. older approach but still can be found widely in code bases.
2. helps in **reusing logic across components** using render prop approach
    - replaced by hooks

## 10. hooks?
1. allows us to **hook into life cycle methods** without having to actually creating a class.
2. in addition to that: hooks allows us to **share logic across components** like: hoc and render prop
    - can create custom hook and use it across multiple different components
    - with hoc or render props, we had to create wrappers. So we might end up having a lot of wrappers to pass data across components.
    - hooks solves this issue by not having to create any wrapper. can use ref and link logic to hook fn

## 11. useEffect hook?
* **alternate to life cycle hooks**
1. componentDidMount: `useEffect(() => {}, [])`
2. componentDidUpdate: `useEffect(() => {}, [number])` will execute when number changes
3. componentUnmount

## 12. React memo
1. React `memo` makes sure that a component **re-renders only if it's props are changing.**
    - alternate: `shouldComponentUpdate`, `PureComponent` in class component
    - React.memo helps achieve teh same with **fn component**
    - import `memo` from react and wrap fn around `memo`
    - so if component does not have any prop: and if parent prop changes: child won't re-render

## 13. useCallback
1. If react child component has props pointed in parent. although it doesn't change: if parent re-renders: this prop will re-render and child will re-render. a new fn is created every time. To fix this: `useCallback`
    - `const memoizedFunc = useCallback(someFunc, []);` then pass memoizedFunc to child component. So it won't re-render even if someFunc is re-created.
2. useCallback helps us to **memoize functions**

## 14. useMemo
1. useCallback helps us to memoize functions. Similarly useMemo helps us to **memoize values**.
2. `const memoizedValue = useMemo(largestNumber, []);`
    - so if a value is not changing: it won't re-render the associated component
