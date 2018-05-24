// You can have default parameters!
// The variables with defaults, don't need to have a variable passed to it.
// If there is a variable passed to it, then the default gets overridden

const defParam = (a, b = 20) => a * b;
defParam(10);
// Output will be 200, since 10 * 20 = 200
defParam(3, 10);
// Output will be 30, since 3 * 10 = 30
