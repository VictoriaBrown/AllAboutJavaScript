import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    // Array that needs to be rendered in List component
    const favoriteCars = ['Honda CR-V', 'Toyota Highlander', 'Ford F-150', 'BMW X3', 'Subaru Crosstrek'];

    return (
        <List cars={favoriteCars}/>
    );
}

const List = props => {
    const listCars = props.cars.map((cars, index) => (
        <li key={index}>{cars}</li>
    ));
    return <ol>{listCars}</ol>;
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);