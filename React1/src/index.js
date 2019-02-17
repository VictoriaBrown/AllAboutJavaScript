// Import statements:
// React is needed to create virtual DOM elements
import React from 'react';
// ReactDOM is needed to update the view upon request
import ReactDOM from 'react-dom';

// Using ReactDOM to update page to include h1 element inside of root element
ReactDOM.render(
    // Creating virtual DOM h1 element with 0 props, and child of "Hello, World!"
    React.createElement("h1", {}, "Hello, World!"),
    // This is where the h1 element is going to be placed
    document.getElementById("root")
);

// Putting an h1 element inside of a div
ReactDOM.render(
    React.createElement("div", {}, React.createElement("h1", {}, "h1 element inside of a div")),
    document.getElementById("h1InsideDiv")
);

// Rendering a new element with a class id being passed in the props
ReactDOM.render(
    React.createElement("h1", { className: 'flowers' }, "h1 element with class name being set in props!"),
    document.getElementById("passingIdInProps")
);

// Rendering a new anchor element with href being passed in the props
ReactDOM.render(
    React.createElement("a", { href: 'https://www.google.com' }, "Click here to go to Google. Anchor element with href being set in props!"),
    document.getElementById('anchor')
);

// Rendering an unordered list
ReactDOM.render(
    React.createElement("ul", {}, 
        React.createElement("li", {}, "Apples"),
        React.createElement("li", {}, "Bananas"),
        React.createElement("li", {}, "Mangos")
    ),
    document.getElementById("unorderedList")
);

// Rendering a nested unordered list
ReactDOM.render(
    React.createElement("ul", {}, 
        React.createElement("li", {}, 
            "Apples",
            React.createElement("ul", {},
                React.createElement("li", {}, "$1.00 per lb")    
            ),
        ),
        React.createElement("li", {}, 
            "Oranges",
            React.createElement("ul", {}, 
                React.createElement("li", {}, "$.70 per lb")
            ),
        ),
        React.createElement("li", {}, 
            "Mangos",
            React.createElement("ul", {}, 
                React.createElement("li", {}, "$2.00 each")
            ),
        )
    ),
    document.getElementById("nestedUnorderedList")
);

// Breaking down the above nested lists into variables for simplfication
const applesPrice = React.createElement('li', {}, '$1.00 per lb');
const apples = React.createElement('ul', {}, applesPrice);

const orangesPrice = React.createElement('li', {}, '$.70 per lb');
const oranges = React.createElement('ul', {}, orangesPrice);

const mangosPrice = React.createElement('li', {}, '$2.00 each');
const mangos = React.createElement('ul', {}, mangosPrice);

ReactDOM.render(
    React.createElement(
        "ul",
        {},
        React.createElement("li", {}, 'Apples', apples),
        React.createElement("li", {}, 'Oranges', oranges),
        React.createElement("li", {}, 'Mangos', mangos)
    ),
    document.getElementById("variablesUnoreredList")
);

