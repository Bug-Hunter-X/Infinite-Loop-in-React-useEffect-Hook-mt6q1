```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: useEffect runs only once after the initial render
    // because of the empty dependency array [].
    // To run useEffect only once, specify an empty dependency array [].
    console.log('useEffect runs only once');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```