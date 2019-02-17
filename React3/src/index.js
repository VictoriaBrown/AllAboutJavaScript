import React from 'react';
import ReactDOM from 'react-dom';

// Unordered list using JSX
ReactDOM.render(
    <ul>
        <li>Apples</li>
        <li>Oranges</li>
        <li>Mangos</li>
    </ul>,
    document.getElementById('root')
);

// Nested unordered list using JSX
ReactDOM.render(
    <ul>
        <li>Apples</li>
        <ul>
            <li>$1.00 per lb</li>
        </ul>
        <li>Oranges</li>
        <ul>
            <li>$.70 per lb</li>
        </ul>
        <li>Mangos</li>
        <ul>
            <li>$2.00 each</li>
        </ul>
    </ul>,
    document.getElementById('root')
);

// Nested unordered list with variables using JSX
const apples = 'Apples';
const applesPrice = '$1.00 per lb';
const oranges = 'Oranges';
const orangesPrice = '$.70 per lb';
const mangos = 'Mangos';
const mangosPrice = '$2.00 each';

ReactDOM.render(
    <ul>
        <li>{apples}</li>
        <ul>
            <li>{applesPrice}</li>
        </ul>
        <li>{oranges}</li>
        <ul>
            <li>{orangesPrice}</li>
        </ul>
        <li>{mangos}</li>
        <ul>
            <li>{mangosPrice}</li>
        </ul>
    </ul>,
    document.getElementById('root')
);

// Setting class name using JSX
ReactDOM.render(
    <div>
        <h1 class="flower">Hello, world!</h1>
    </div>,
    document.getElementById('root')
);

// Using variables to hold HTML and calling that variable in render method
const groceryList = (
      <ul>
        <li>Apples</li>
        <li>Oranges</li>
        <li>Mangos</li>
      </ul>
);
  
ReactDOM.render(
    groceryList,
    document.getElementById('root')
);

// Setting nested unordered list in a variable and calling that in render method
const groceryList2 = (
      <ul>
        <li>Apples</li>
          <ul>
            <li>$1.00 per lb</li>
          </ul>
        <li>Oranges</li>
          <ul>
            <li>$.70 per lb</li>
          </ul>
        <li>Mangos</li>
          <ul>
            <li>$2.00 each</li>
          </ul>
      </ul>
    );
  
  ReactDOM.render(
    groceryList2,
    document.getElementById('root')
  );

// Returning HTML from a function
function groceryList3(item1, item2, item3) {
    return (
        <ul>
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>
        </ul>
    );
}

ReactDOM.render(
    groceryList3('Apples', 'Oranges', 'Mangos'),
    document.getElementById('root')
);