# maxSection12

- Every **state Changes**, **Prop changes**, **context changes**, would result in this compoenent fucntion, being executed again
- for the reactDom, only the affected tag will affected and change
- In react, the child component will affected if there is change in parent component too.

React.memo
**Prevent unnecessary render**

- React.memo tells React that for the component, React should look at the props that the component gets
- and check the new value for all those props
- and compare it to the previous value those props got,
- and only if the value of a prop changed, the component should re-executed.

_Why we dont use it in all component_

- React needs to do 2 thungs

1. it needs to store the previous prop valus
2. do comparison

- memo is good as you can avoid unnecessart re-render cycles
- Limitations :
  - it not works on reference objects like object, array and functions

useCallback

- alternative of React.memo for reference object
- is a hook that allows us to store a function across component executions
- it allows us to tell React that we wanna save a function and the function should not be recreated

_Sometimes, you might think, why do we need dependency array on useCallback, as my function always the same logic accorss rerender cycles_

- In Javascript, functions are closure which means when a function is defined. Javascript basically locks in all the variable that we are using in there.
- As the component is rerender and reexecuted, the function inside the useCallback is not recreated under all the circumstances
- all the stored Values is used not a new one when component is rerender
- so we would need a array dependecies

_Important to know Closure and Primitive Reference Value_

Dive in useState
\*You might wonder why useState go back to it initial

- React got special handle it and same as useReducer

useMemo

- React.memo use for whole component, while we can use useMemo on specific thing inside a compoenent
- we can use useMemo when we do calculation in a component

**For Example**
** const sortedList = useMemo(()=>{
return props.items.sort((a, b)=>a-b);
},[props.items]); **
At Parent Component
\*\* const listItems = useMemo(()=> [5,3,1,10,9],[])
