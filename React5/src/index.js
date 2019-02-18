import React from 'react';
import ReactDOM from 'react-dom';
// import for prop validation
import PropTypes from 'prop-types';

// Main React Component to return all other components
const App = props => {
    // user variable for User component
    const user = {
        name: 'George Bailey',
        address: '1122 Drafty House',
        city: 'Bedford Falls',
        state: 'New York',
        zip: 13148
    };

    // items array to put into listItems
    const items = [
        { name: 'Bread', price: 2.35 },
        { name: 'Milk', price: 2.0 },
        { name: 'Eggs', price: 3.15 },
        { name: 'Tea', price: 4.0 }
    ];

    return(
        <div>
            <GroceryList item1='Apples' item2='Oranges' item3='Mangos'/>
            <Hello name='Chris'/>
            <Hello name='Cameron'/>
            <Hello name='Katie'/>
            <Hello name='Liam'/>
            <Employee name='Victoria Brown' age='23' position='UAT Tester'/>
            <Employee name="David" age='121'/>
            <User person={user} items="Boots, Tie, Socks" amount={100}/>
            <List items={items}/>
        </div>
    );
};


// List component - puts all items from props into an unordered list
const List = props => {
    const listItems = props.items.map((item, index) => (
        <li key={index}>
            {item.name}: {item.price}
        </li>
    ));
    return <ul>{listItems}</ul>;
};

// User component, unordered list of a client's information on purchases from a company
const User = props => (
    <ul>
        <li>Name: {props.person.name}</li>
        <ul>
            <li>Address: {props.person.address}</li>
            <li>City: {props.person.city}</li>
            <li>State: {props.person.state}</li>
            <li>Zip: {props.person.zip}</li>
        </ul>
        <li>Items: {props.items}</li>
        <li>Paid: {props.paid}</li>
        <li>Amount: {props.amount}</li>
        <li>Shipped: {props.shipped}</li>
    </ul>
);

// Setting prop validation for User component props
User.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
    items: PropTypes.string.isRequired,
    paid: PropTypes.bool,
    amount: PropTypes.number.isRequired,
    shipped: PropTypes.bool
};

// Default prop for paid and shipped - false
User.defaultProps = {
    paid: false,
    shipped: false
};

// Component that lists info about an employee
const Employee = props => (
    <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.position}</li>
    </ul>
);

// Setting up prop validation for Employee component
Employee.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    position: PropTypes.string
};

// Adding default prop for position - employee
Employee.defaultProps = {
    position: "employee"
};

// Simple component that allows us to add a name to a sentence.
const Hello = props => (
    <div>
        <h1>Hello, {props.name}!</h1>
    </div>
);

// Using React Component rather than variable to render unordered list of 3 items
const GroceryList = props => {
    return (
        <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
        </ul>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);