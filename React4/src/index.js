import React from 'react';
import ReactDOM from 'react-dom';

const capitals = (state, pop, cap) => {
    return (
        <table>
            <tr>
                <th>{state}</th>
                <th>{pop}</th>
                <th>{cap}</th>
            </tr>
            <tr>
                <td>Idaho</td>
                <td>1.683 million</td>
                <td>Boise</td>
            </tr>
            <tr>
                <td>Tennessee</td>
                <td>6.651 million</td>
                <td>Nashville</td>
            </tr>
            <tr>
                <td>Maine</td>
                <td>1.331 million</td>
                <td>Agusta</td>
            </tr>
            <tr>
                <td>Wisconsin</td>
                <td>5.779 million</td>
                <td>Madison</td>
            </tr>
        </table>
    );
};

ReactDOM.render(
    capitals('State', 'Population', 'Capital'),
    document.getElementById('root')
);