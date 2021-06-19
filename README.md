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
