# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug leads to an infinite rendering loop because the `useEffect` function incorrectly modifies the state variable it depends on within the function itself. This results in a continuous re-render cycle. The solution demonstrates the correct way to handle dependencies in `useEffect` to prevent this type of error.

## Bug
The `bug.js` file contains the buggy code. The `useEffect` hook attempts to increment the `count` state on every render, creating an infinite loop.