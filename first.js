//node blocking I/O
//node js runs multiple tasks parrelly and asynchronously. It uses a single thread to handle multiple requests. Node.js uses non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections.

console.log("Hello, World!");

setTimeout(() => {
  console.log("Time's up!");
}, 1000);

console.log("Time end up");